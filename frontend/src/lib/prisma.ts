/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";


import { Pool } from "pg";

const connectionString = `${process.env.DATABASE_URL}`;
const connectionUrl = new URL(connectionString);
// Remove sslmode query param as it conflicts with the ssl option in PoolConfig
connectionUrl.searchParams.delete("sslmode");

const pool = new Pool({
  connectionString: connectionUrl.toString(),
  max: 1,
  ssl: connectionString.includes("localhost")
    ? false
    : { rejectUnauthorized: false },
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export { prisma };
