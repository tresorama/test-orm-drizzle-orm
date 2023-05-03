import { db, users } from './db';

// Utils
const l = console.log;

// Example of SQL against DB
const run = async () => {
  // play here

};

(async () => {
  try {
    console.log('=======================================');
    console.log("Playground Start");
    console.log('=======================================');
    await run();
    console.log('=======================================');
    console.log("Playground End Without Problem ");
    console.log('=======================================');
  } catch (error) {
    console.log('=======================================');
    console.log('Playground Error!!');
    console.log('========================================');
    console.error(error);
  }
})();