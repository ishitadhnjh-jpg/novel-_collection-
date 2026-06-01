// Lovestruck Hub - Application Logic
// 1. Curated Classic & Modern Romance Novels (Local Seed Database)
// across romance, love, and courtship topics, inserting them in small batches
// so the UI stays responsive throughout.
async function load800GutenbergBooks() {
    const TOPICS = ['romance', 'love', 'courtship', 'marriage', 'woman'];
    const MAX_PAGES = 12; // increased to fetch more books and speed up sync
    let totalAdded = 0;
    scraperLogText.textContent = `[${new Date().toLocaleTimeString()}] 📡 Starting fast-sync: loading up to ${MAX_PAGES * 32 * TOPICS.length} romance novels…`;
    for (const topic of TOPICS) {
        // Build an array of fetch promises for all pages of this topic
        const pagePromises = [];
        for (let p = 1; p <= MAX_PAGES; p++) {
            const url = `https://gutendex.com/books/?topic=${encodeURIComponent(topic)}&page=${p}`;
            pagePromises.push(fetchWithRetry(url).then(res => (res && res.ok) ? res.json() : null).catch(() => null);
        }
        // Resolve all page requests in parallel
        const pageResults = await Promise.all(pagePromises);
        let topicBatchAdded = 0;
        pageResults.forEach(data => {
            if (!data) return;
            const results = data.results || [];
            results.forEach(book => {
                const entry = buildGutenbergBookEntry(book);
                if (!appState.scrapedIds.has(entry.id)) {
                    appState.catalog.push(entry);
                    appState.scrapedIds.add(entry.id);
                    topicBatchAdded++;
                    totalAdded++;
                }
            });
        });
        // UI update after each topic completes
        syncedCount.textContent = appState.catalog.length;
        scraperLogText.textContent = `[${new Date().toLocaleTimeString()}] 📥 Topic "${topic}" loaded ${topicBatchAdded} new books (total: ${appState.catalog.length})`;
        renderGenreFilters();
        filterAndSortBooks();
    }
    // Cache the catalog in localStorage so next visit is instant
    try {
        const cachePayload = JSON.stringify(appState.catalog.map(b => ({
            ...b, isFullyLoaded: false // don't cache full text
        })));
        localStorage.setItem('lovestruck_catalog_cache', cachePayload);
        localStorage.setItem('lovestruck_catalog_version', Date.now().toString());
    } catch (cacheErr) {
        console.warn("Catalog cache write failed (storage full?):", cacheErr);
    }
    scraperLogText.textContent = `[${new Date().toLocaleTimeString()}] ✅ Fast-sync complete! ${totalAdded} new novels added — total library: ${appState.catalog.length} books.`;
    renderGenreFilters();
    filterAndSortBooks();
}
    const TOPICS   = ['romance', 'love', 'courtship', 'marriage', 'woman'];
    const MAX_PAGES = 6;   // 6 pages × 32 books × 5 topics ≈ 960 books
    let totalAdded  = 0;
    }
}
