import mongoose from  "mongoose";

const connectDb = async ()=> {
     try {
await mongoose.connect(process.env.MONGO_URI);
        console.log ("mongo db connect ho gya hai");


     }
      catch (error){
          console.log("mongo db is not connected");
          process .exit (1);

      }
}



export default connectDb;
