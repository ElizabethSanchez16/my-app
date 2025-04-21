export const openDB = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('BlogDB', 3);
  
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        
        if (!db.objectStoreNames.contains('blogs')) {
          const store = db.createObjectStore('blogs', { keyPath: 'id' });
          store.createIndex('by_date', 'date', { unique: false });
        }
        
        if (!db.objectStoreNames.contains('comments')) {
          const store = db.createObjectStore('comments', { keyPath: 'id' });
          store.createIndex('by_blog', 'blogId', { unique: false });
        }
      };
  
      request.onsuccess = () => resolve(request.result);
      request.onerror = (e) => {
        console.error('IndexedDB error:', e);
        reject(request.error);
      };
    });
  };
  
  export const getAllFromDB = async (storeName) => {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const request = store.getAll();
      
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => resolve([]);
    });
  };
  
  export const saveToDB = async (storeName, data) => {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      store.put(data);
      
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
    });
  };
  
  export const deleteFromDB = async (storeName, id) => {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      store.delete(id);
      
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
    });
  };