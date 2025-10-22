import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema: "./src/db/schemajs",
    dialect: 'sqlite',
    dbCredentials: {
        url: process.env.DB_FILE,
    }
})