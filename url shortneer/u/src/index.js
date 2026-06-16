import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import app from "./app.js";
import connectDb from "./config/db.js";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const envCandidates = [
  path.resolve(currentDir, "../.env"),
  path.resolve(currentDir, ".env"),
];
const envPath = envCandidates.find((candidate) => existsSync(candidate));

dotenv.config(envPath ? { path: envPath } : undefined);

const startServer = async () => {
  try {
    await connectDb();

    const port = Number.parseInt(`${process.env.PORT ?? "4000"}`.trim(), 10) || 4000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

startServer();
