import { migrate } from 'drizzle-orm/node-postgres/migrator';
import drizzleConfig from '../../drizzle.config.json';
import { db } from './db-connection';

// this will automatically run needed migrations on the database
migrate(db, { migrationsFolder: drizzleConfig.out });
