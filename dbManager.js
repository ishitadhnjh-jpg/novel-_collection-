// dbManager.js - Promise-based IndexedDB Wrapper for Lovestruck Vault
// Handles unlimited local offline storage for complete full-text romance novels.

window.dbManager = (function () {
    const DB_NAME = "LovestruckVault";
    const DB_VERSION = 1;
    const STORE_NAME = "novels";
    let db = null;

    // Initialize database
    function init() {
        return new Promise((resolve, reject) => {
            if (db) return resolve(db);

            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onerror = (event) => {
                console.error("IndexedDB open error:", event.target.error);
                reject(event.target.error);
            };

            request.onsuccess = (event) => {
                db = event.target.result;
                resolve(db);
            };

            request.onupgradeneeded = (event) => {
                const database = event.target.result;
                if (!database.objectStoreNames.contains(STORE_NAME)) {
                    database.createObjectStore(STORE_NAME, { keyPath: "id" });
                }
            };
        });
    }

    // Save or update a novel
    function saveNovel(novel) {
        return new Promise((resolve, reject) => {
            init().then(database => {
                const transaction = database.transaction([STORE_NAME], "readwrite");
                const store = transaction.objectStore(STORE_NAME);
                const request = store.put(novel);

                request.onsuccess = () => resolve(true);
                request.onerror = (event) => reject(event.target.error);
            }).catch(reject);
        });
    }

    // Retrieve all novels from the vault
    function getAllNovels() {
        return new Promise((resolve, reject) => {
            init().then(database => {
                const transaction = database.transaction([STORE_NAME], "readonly");
                const store = transaction.objectStore(STORE_NAME);
                const request = store.getAll();

                request.onsuccess = (event) => resolve(event.target.result || []);
                request.onerror = (event) => reject(event.target.error);
            }).catch(reject);
        });
    }

    // Retrieve a specific novel by ID
    function getNovel(id) {
        return new Promise((resolve, reject) => {
            init().then(database => {
                const transaction = database.transaction([STORE_NAME], "readonly");
                const store = transaction.objectStore(STORE_NAME);
                const request = store.get(id);

                request.onsuccess = (event) => resolve(event.target.result || null);
                request.onerror = (event) => reject(event.target.error);
            }).catch(reject);
        });
    }

    // Delete a specific novel
    function deleteNovel(id) {
        return new Promise((resolve, reject) => {
            init().then(database => {
                const transaction = database.transaction([STORE_NAME], "readwrite");
                const store = transaction.objectStore(STORE_NAME);
                const request = store.delete(id);

                request.onsuccess = () => resolve(true);
                request.onerror = (event) => reject(event.target.error);
            }).catch(reject);
        });
    }

    // Clear all entries
    function clear() {
        return new Promise((resolve, reject) => {
            init().then(database => {
                const transaction = database.transaction([STORE_NAME], "readwrite");
                const store = transaction.objectStore(STORE_NAME);
                const request = store.clear();

                request.onsuccess = () => resolve(true);
                request.onerror = (event) => reject(event.target.error);
            }).catch(reject);
        });
    }

    return {
        init,
        saveNovel,
        getAllNovels,
        getNovel,
        deleteNovel,
        clear
    };
})();
