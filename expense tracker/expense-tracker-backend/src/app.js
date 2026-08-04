 const express = require ('express');

  const cors = require ( cors);
   const helmet = require  ('helmet');

    const morgan = require  ('morgan');



      const app = express ();

       //middlewares
        app.use ( express.json ());
         app.use (cors ());
          app.us (helmet ());

           app.use (morgan ("dev"));

            //test route

             app.get ("/", (req, res)=> {
                 res.json  ({
                     success: true,
                      message: "welcome to expense tracker api",

                 });
             });


              module.exports = app;