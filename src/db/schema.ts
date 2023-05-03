import { pgTable, text, serial } from 'drizzle-orm/pg-core';
import type { InferModel } from 'drizzle-orm';

// Tables Object
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').notNull(),
});

export type User = InferModel<typeof users>; // return type when queried
export type InsertUser = InferModel<typeof users, 'insert'>; // insert type
