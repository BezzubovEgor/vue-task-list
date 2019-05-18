import { openDB } from 'idb';

const DB_VERSION = 1;
const DB_NAME = 'vue-task-list';

async function getDb() {
    if (!('indexedDB' in window)) {
        throw new Error('YOur brouser does not supports indexedDB');
    }
    return openDB(DB_NAME, DB_VERSION, {
        upgrade(db) {
            if (!db.objectStoreNames.contains('projects')) {
                db.createObjectStore('projects');
            }
        }
    });
}

async function loadStore(storeName) {
    const db = await getDb();
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    return await store.get(storeName);
}

async function saveToStore(storeName, data) {
    const db = await getDb();
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    store.put(data, storeName);
    return await tx.oncomplete;
}

export {
    loadStore,
    saveToStore,
}