 const express = require ('express');
const protect = require ('./middlewares/auth.middleware');

  const cors = require ('cors');
   const helmet = require  ('helmet');

    const morgan = require  ('morgan');


     const authRoutes = require ("./routes/auth.routes");


      const app = express ();

       //middlewares
        app.use ( express.json ());
         app.use (cors ());
          app.use (helmet ());

           app.use (morgan ("dev"));

            //test route
             app.use ("/api/auth", authRoutes);


             app.get ("/", (req, res)=> {
                 res.json  ({
                     success: true,
                      message: "welcome to expense tracker api",

                 });
             });
              app.get ("/api/profile", protect  , (req, res)=> {
                 res.json ({
                     success: true,
                      user: req.user,

                 });
              });


              module.exports = app;