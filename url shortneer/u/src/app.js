import express from "express";
 import urlRoutes from "./routes/urlRoutes.js";
    import { redirectToOriginalUrl } from "./controllers/urlControllers.js";
    import dotenv from "dotenv";
    

 const app = express();



  app.use (express.json ());

   app.use(express.urlencoded ({extended : true}));
   app.use(express.json ());

   app.use ("/api/url", urlRoutes);

app.get("/:shortCode", redirectToOriginalUrl);
   export default app;

