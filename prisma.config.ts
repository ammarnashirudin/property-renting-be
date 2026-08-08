// import "dotenv/config";
// import { defineConfig, env } from "prisma/config";

// export default defineConfig({
//   schema: "prisma/schema.prisma",
//   datasource:{
//     url:env("DATABASE_URL")
//   }
// })

import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",   // <- ganti dari "prisma/schema" ke ini
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DIRECT_URL"),
  },
});