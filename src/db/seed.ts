import { db, users } from ".";

// Utils
const l = console.log;

// Main
const run = async () => {
  const insertedUsers = await db.insert(users).values([
    { fullName: 'Mark 1' },
    { fullName: 'Mark 2' },
    {},
    { fullName: 'John 2' },
  ]).returning();

  l({ insertedUsers });
};

(async () => {
  try {
    console.log('Initializing ...!');
    await run();
    console.log('Success!');
    process.exit(0);
  } catch (error) {
    console.log('Error!');
    console.error(error);
    process.exit(1);
  }
})();