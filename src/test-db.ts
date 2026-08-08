// src/test-db.ts
import "dotenv/config";
import { PrismaClient } from "./generated/prisman"; // sesuaikan sama path output generator kamu
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const result = await prisma.$queryRaw`SELECT current_schema(), now()`;
  console.log(result);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());