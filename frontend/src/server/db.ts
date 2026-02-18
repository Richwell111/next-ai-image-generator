import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

import { env } from "~/env";

const createPrismaClient = () => {
  const connectionUrl = new URL(env.DATABASE_URL);
  // Remove sslmode query param as it conflicts with the ssl option in PoolConfig
  connectionUrl.searchParams.delete("sslmode");

  const pool = new Pool({
    connectionString: connectionUrl.toString(),
    max: 1, // Only use 1 connection and let Prisma handle the concurrency
    ssl: env.DATABASE_URL.includes("localhost")
      ? false // No SSL for local dev
      : { rejectUnauthorized: false }, // For Hosted DBs (Neon/Supabase) without strict verification
  });
  const adapter = new PrismaPg(pool);
  
  return new PrismaClient({
    adapter,
    log:
      env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
};

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
