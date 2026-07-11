import express from "express";

 import Redis from 'ioredis';

  const app = express();

   app.use (express.json ());


    const redis = new Redis (process.env.REDIS_URL || "redis://localhost:6379");

     const QUEUE_NAME = "queue:emails";

       app.post ('/email', async (req, res)=> {

         const job = {
             to: req.body.to,
                subject: req.body.subject,
                body: req.body.body || "no content",
                 createdAt: new Date().toISOString()
         }
         await redis.lpush(QUEUE_NAME, JSON.stringify(job));
         res.status(201).json({ message: "Email added to queue" });
       });

       app.get('/email/process-one', async (req, res)=> {{
         const rawJob = await redis.rpop (QUEUE_KEY);

          if ( !rawJob){
             return res.json ({message: "no jobs in the queue"});


          }

            const job = JSON.parse (rawJob);

              //simulate email sendin\
               res.json ({message: 'email sent' , job});



       }})

        app.listen (3000,  ()=> {
              console.log  ("server is running on port http://localhost:3000");



        });
        