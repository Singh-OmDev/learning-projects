import express from "express";
 import studentsRoute from "./routes/studentsRoute.js"


const app = express();
app.use(express.json ());

 app.use ("/api/students", studentsRoute);
  app.use ("/api/search", studentsRoute);

export default app;

