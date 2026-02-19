import { PrismaClient } from "@/generated/prisman";
import { Pool } from "pg";
import {PrismaPg} from "@prisma/adapter-pg";
import "dotenv/config";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool, {schema:"property_renting_web"})

const prisma = new PrismaClient({
    adapter,
});

export default prisma;