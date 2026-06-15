import dotenv from  "dotenv";

  import app from "./app.js";
    import connectDb from "./config/db.js";


    dotenv.config();
console.log(process.env.MONGO_URI);
    connectDb();


     app.listen (process.env.PORT ||4000, ()=> {

         console.log (`server is running on port ${process.env.PORT}`);
         

     });
