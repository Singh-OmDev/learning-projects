import express from "express";
 import Redis from "ioredis";


  const app = express();
  

   app.use (express.json ());


    const redis =  new Redis(process.env.REDIS_URL || "redis://localhost:6379");

    const BANNER_KEY = "site_banner";
     app.post ("/banner", async (req, res)=> {

         await redis.set (BANNER_KEY, req.body.message || "WELCOME to chai aur redisssssss");

          res.json ({ success: true, message: "banner updated successfully" });
     })

     app.get("/banner", async (req, res)=> {
         const message = await redis.get(BANNER_KEY) || "WELCOME to chai aur redis";

          res.json ({ message });
     })
      app.delete ("/banner", async (req, res)=> {
         await redis.del (BANNER_KEY);  
          res.json({ success: true, message: "banner deleted successfully" });
      } )


      app.get ("/banner/exits", async ( req, res)=> {
         const exits = await redis.exits (BANNER_KEY);

          res.json ({exits : Boolean (exits)});



      })


        app.listen(3000, ()=> {
             console.log ("server running on http://localhost:3000");

        })