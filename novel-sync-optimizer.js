/**
 * ============================================================
 *  NOVEL SYNC OPTIMIZER — High-Speed Batch Parallel Fetcher
 *  Handles 800+ novels efficiently using concurrency control
 * ============================================================
 *
 *  VOCABULARY:
 *  - Concurrency   : Running multiple tasks at the same time
 *  - Batch         : A group of items processed together
 *  - Throttle      : Limit speed to avoid overloading the server
 *  - Cache         : Saved data so we don't re-fetch same item
 *  - Retry         : Try again if something fails
 *  - Debounce      : Wait briefly before executing to avoid spam
 */

// ============================================================
// STEP 1 — CONFIGURATION (Adjust these to your needs)
// ============================================================

const SYNC_CONFIG = {
  BATCH_SIZE: 20,          // How many novels to fetch at once (parallel)
  MAX_RETRIES: 3,          // How many times to retry a failed fetch
  RETRY_DELAY_MS: 500,     // Wait time (ms) before retrying a failed novel
  REQUEST_TIMEOUT_MS: 8000,// Max time to wait for a single novel fetch
  CACHE_ENABLED: true,     // Save fetched novels to avoid re-fetching
  CACHE_KEY: "novel_cache",// localStorage key for cache storage
  CACHE_EXPIRY_HOURS: 24,  // Cache expires after 24 hours
  API_BASE_URL: "/api/novels", // 🔁 CHANGE THIS to your actual API endpoint
};


// ============================================================
// STEP 2 — CACHE MANAGER
// Saves novels locally so repeat syncs are instant
// ============================================================

const CacheManager = {

  // Save a novel to cache
  set(novelId, data) {
    if (!SYNC_CONFIG.CACHE_ENABLED) return;
    const cache = this._loadAll();
    cache[novelId] = {
      data,
      timestamp: Date.now(),
    };
    localStorage.setItem(SYNC_CONFIG.CACHE_KEY, JSON.stringify(cache));
  },

  // Get a novel from cache (returns null if expired or missing)
  get(novelId) {
    if (!SYNC_CONFIG.CACHE_ENABLED) return null;
    const cache = this._loadAll();
    const entry = cache[novelId];
    if (!entry) return null;

    const ageHours = (Date.now() - entry.timestamp) / (1000 * 60 * 60);
    if (ageHours > SYNC_CONFIG.CACHE_EXPIRY_HOURS) {
      delete cache[novelId];
      localStorage.setItem(SYNC_CONFIG.CACHE_KEY, JSON.stringify(cache));
      return null; // Cache expired (outdated), fetch fresh
    }
    return entry.data;
  },

  // Load entire cache from localStorage
  _loadAll() {
    try {
      return JSON.parse(localStorage.getItem(SYNC_CONFIG.CACHE_KEY) || "{}");
    } catch {
      return {};
    }
  },

  // Clear all cached novels (call when you want a fresh sync)
  clear() {
    localStorage.removeItem(SYNC_CONFIG.CACHE_KEY);
    console.log("🗑️ Cache cleared.");
  },
};


// ============================================================
// STEP 3 — FETCH A SINGLE NOVEL (with timeout + retry logic)
// ============================================================

async function fetchNovelById(novelId) {

  // Check cache first — if found, return instantly (no network call)
  const cached = CacheManager.get(novelId);
  if (cached) return { id: novelId, data: cached, fromCache: true };

  let attempt = 0;

  while (attempt < SYNC_CONFIG.MAX_RETRIES) {
    attempt++;
    try {
      // AbortController: cancels the fetch if it takes too long
      const controller = new AbortController();
      const timeout = setTimeout(
        () => controller.abort(),
        SYNC_CONFIG.REQUEST_TIMEOUT_MS
      );

      const response = await fetch(
        `${SYNC_CONFIG.API_BASE_URL}/${novelId}`,
        { signal: controller.signal }
      );
      clearTimeout(timeout);

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      CacheManager.set(novelId, data); // Save to cache for next time
      return { id: novelId, data, fromCache: false };

    } catch (err) {
      const isLastAttempt = attempt >= SYNC_CONFIG.MAX_RETRIES;
      if (!isLastAttempt) {
        // Wait before retrying (exponential backoff = progressively longer wait)
        await delay(SYNC_CONFIG.RETRY_DELAY_MS * attempt);
      } else {
        console.warn(`❌ Failed to fetch novel ${novelId} after ${attempt} attempts:`, err.message);
        return { id: novelId, data: null, error: err.message };
      }
    }
  }
}


// ============================================================
// STEP 4 — BATCH PROCESSOR
// Splits 800+ novel IDs into batches, fetches each batch in parallel
// ============================================================

async function syncNovelsInBatches(novelIds, onProgress) {
  const total = novelIds.length;
  const results = [];
  let completed = 0;
  let failed = 0;

  console.log(`🚀 Starting sync of ${total} novels | Batch size: ${SYNC_CONFIG.BATCH_SIZE}`);
  const startTime = performance.now();

  // Split the full list into smaller batches
  // e.g., 800 novels → 40 batches of 20
  const batches = chunkArray(novelIds, SYNC_CONFIG.BATCH_SIZE);

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];

    // Fetch all novels in this batch SIMULTANEOUSLY (parallel)
    const batchResults = await Promise.allSettled(
      batch.map((id) => fetchNovelById(id))
    );

    // Process each result from this batch
    batchResults.forEach((result) => {
      if (result.status === "fulfilled" && result.value.data) {
        results.push(result.value);
        completed++;
      } else {
        failed++;
      }
    });

    // Report progress after each batch
    const percent = Math.round(((completed + failed) / total) * 100);
    if (typeof onProgress === "function") {
      onProgress({ completed, failed, total, percent });
    }

    console.log(`📦 Batch ${i + 1}/${batches.length} done | ✅ ${completed} synced | ❌ ${failed} failed | ${percent}%`);
  }

  const elapsed = ((performance.now() - startTime) / 1000).toFixed(2);
  console.log(`\n✅ Sync complete in ${elapsed}s | ${completed} succeeded | ${failed} failed`);

  return { results, completed, failed, total };
}


// ============================================================
// STEP 5 — MAIN SYNC FUNCTION (Entry point — call this)
// ============================================================

/**
 * Call this function to start syncing all your novels.
 *
 * HOW TO USE:
 *   const novelIds = [1, 2, 3, ..., 800]; // Your list of novel IDs
 *   const result = await startSync(novelIds);
 *
 * OR with a progress callback:
 *   await startSync(novelIds, ({ percent, completed, total }) => {
 *     document.getElementById("progress").innerText = `${percent}% synced`;
 *   });
 */
async function startSync(novelIds, onProgress) {
  if (!Array.isArray(novelIds) || novelIds.length === 0) {
    console.error("⚠️ No novel IDs provided.");
    return;
  }

  // Remove duplicates using Set (a data structure with unique values only)
  const uniqueIds = [...new Set(novelIds)];
  console.log(`📚 Total unique novels to sync: ${uniqueIds.length}`);

  return await syncNovelsInBatches(uniqueIds, onProgress);
}


// ============================================================
// STEP 6 — OPTIONAL: AUTO-SYNC WITH PROGRESS BAR (UI Ready)
// Paste this into your HTML page to show a live progress bar
// ============================================================

function initSyncUI(novelIds) {
  // Create a floating sync panel on your page
  const panel = document.createElement("div");
  panel.id = "sync-panel";
  panel.style.cssText = `
    position: fixed; bottom: 20px; right: 20px;
    background: #1a1a2e; color: #eee; padding: 16px 20px;
    border-radius: 12px; font-family: monospace; font-size: 14px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.4); min-width: 260px; z-index: 9999;
  `;
  panel.innerHTML = `
    <div style="margin-bottom:8px; font-weight:bold; color:#7ecfff;">📚 Novel Sync</div>
    <div id="sync-status">Preparing...</div>
    <div style="background:#333; border-radius:6px; margin-top:10px; height:8px; overflow:hidden;">
      <div id="sync-bar" style="height:100%; width:0%; background:#7ecfff; transition:width 0.3s ease;"></div>
    </div>
    <div id="sync-count" style="margin-top:6px; font-size:12px; color:#aaa;"></div>
  `;
  document.body.appendChild(panel);

  startSync(novelIds, ({ percent, completed, failed, total }) => {
    document.getElementById("sync-bar").style.width = percent + "%";
    document.getElementById("sync-status").innerText = `${percent}% synced`;
    document.getElementById("sync-count").innerText =
      `✅ ${completed} done  ❌ ${failed} failed  📦 ${total} total`;

    if (percent === 100) {
      setTimeout(() => panel.remove(), 3000); // Auto-hide after 3 seconds
    }
  });
}


// ============================================================
// UTILITY FUNCTIONS
// ============================================================

// Split an array into smaller chunks (batches)
function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

// Promise-based delay (pause execution for given milliseconds)
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


// ============================================================
// EXPORTS (for use in Node.js or module-based projects)
// ============================================================

if (typeof module !== "undefined" && module.exports) {
  module.exports = { startSync, CacheManager, SYNC_CONFIG };
}
