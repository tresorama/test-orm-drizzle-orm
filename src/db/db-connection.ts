import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

// Connection to DB
const connectionString = "postgresql://postgres:postgres@localhost:5432/postgres";
const rawQueryLogger = (...msgs: Parameters<typeof console.log>) => {
  console.log("======================================");
  // console.log("Raw SQL");
  // console.log("");
  console.log(...msgs);
  // console.log("======================================");
};
const pool = new Pool({ connectionString, log: rawQueryLogger });
export const db = drizzle(pool);
