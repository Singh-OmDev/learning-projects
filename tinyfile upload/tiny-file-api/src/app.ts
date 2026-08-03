import express from "express";
 
  const app = express ();
   
   //middleware to parse JSON  requests body
    app.use ( express.json ());

     // test route
      app.get ("/", ( req, res)=> {
          res.json ({
             message: "Tiny File Upload API is running",

          });
      });

        export default app;
        

