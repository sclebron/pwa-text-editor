import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('updated to database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.pull({id: 1, jate: content});
  const result = await request;
  console.log('putDb implemented', result);
  console.error('putDb not implemented');
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('get all data from the database');
  const jateDb = await openDB('jate', 1);
  const txt = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('getDb implemented', result);
  console.error('getDb not implemented');
}

initdb();
