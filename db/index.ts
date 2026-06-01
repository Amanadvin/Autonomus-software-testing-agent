import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'; // Removed '.ts' extension

const databaseUrl = process.env.DATABASE_URL || 'postgresql://placeholder-url';

const sql = neon(databaseUrl);
export const db = drizzle(sql, { schema });

export * from './schema'; // Changed '.js' to a clean relative path