import mongoose from "mongoose";

 const studentSchema = new mongoose.Schema ({

     name: {
         type: String,
         required:true
     },
      age: {
         type: Number,
         required:true
      },
       city : {
         type: String,
          
       },
        gender: {
             type:String,

        }

 },
  {
     timestamps:true,

  },
 

)

  const student = mongoose.model("Student",
    studentSchema
  );
  
export default student;
