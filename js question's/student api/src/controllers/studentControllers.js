import Student from "../models/studentSchema.js";

export const createStudent = async (req, res)=> {


    try {
         req.body;
         const student = await Student.create(req.body);
         res.status (201).json ({
             success:true,
              data :student,
            })
             console.log (student);
             
         
        }
         catch (error ){
             res.status (500).json ({
                 success:false,
                 message:"student data is not created",

             });

         }
}

 export const getAllStudents = async  (req, res)=> {
     try {
         const students = await Student.find();
         res.status (200).json({
             success: true,
              count: students.length,
              data: students
         })
          console.log (students);

     }
      catch(error){
   console.log(error);

   res.status(500).json({
      success:false,
      message:error.message
   })
}

 }

  export const getStudentById = async (req,res)=> {
        try {
              const student = await Student.findById(req.params.id);
               if (!student){
                 return res.status (404).json ({
                      success :false,
                      message:"student not found",
                 })
               }
                res.status(200).json(student);
                console.log (student);

        }
         
         catch (error){
             console.log (error);

         }
  }

   export const updateStudentById = async (req, res) =>{
       try {
         const student = await Student.findByIdAndUpdate(req.params.id , req.body, {new:true})

          res.staus (200).json(student);
           console.log ( "the updated students is " , student);
         if (!student){
             return res.status (404).json({
                 success:false,

             })
         }
       }
        catch (error){
             res.status (500 ).json ({
                 success:false,
                  message:error.message,
             })
        }


     
   }
   


