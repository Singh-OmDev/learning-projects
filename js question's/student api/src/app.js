import express from "express";


const app = express();
app.use(express.json ());

 app.use ("/api/students", studentRoutes);
 

export default app;

