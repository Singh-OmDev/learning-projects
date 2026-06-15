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

          res.status (200).json(student);
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
   

    export const deleteStudentById = async (req, res)=> {
          try {
             const student = await Student.findByIdAndDelete(req.params.id);
              res.status (200).json ({
                 success:true,
                 message: "student data deleted successfully",
                 data: student,
              })

            console.log ( "the deleted student is ", student);


             if (!student ){
                  return res.status ( 404).json  ({
                     success:false,
                      message:"student not found",
                  })
             }
    }
     catch (error ){
         res.status (500).json ({
             success:false,
              message: error.message,

         })
     }

    }

      export const searchStudentByName = async (req, res) => {

   if (!req.query.name) {
      return res.status(400).json({
         success: false,
         message: "please provide a name to search"
      });
   }

   const name = req.query.name;

   try {

      const students = await Student.find({
         name: {
            $regex: name,
            $options: "i"
         }
      });

      if (students.length === 0) {
         return res.status(404).json({
            success: false,
            message: `No student found with name ${name}`
         });
      }

      res.status(200).json({
         success: true,
         count: students.length,
         data: students,
         message: `student with matching name ${name} retrieved successfully`
      });

      console.log(students);

   } catch (error) {

      res.status(500).json({
         success: false,
         message: error.message
      });

   }
};

 export const searchStudentByCity = async ( req, res)=> {
       if (!req.query.city){
          return res.status (400).json ({
             success: false,
              message: "please provide a city to search",

          })

           
       }
        const city = req.query.city;
          try {
             const students = await Student.find ({
                  city: {
                     $regex: city,
                     $options: "i",

                  }
                   
             })
              if (students.Length === 0){
                  return res.status (404).json ({

                      success: fals,
                      message: `no student found with  city $ {city}`,

                     
                  })

                   
              }
          }
           catch (error){
              res.status (500).json ({
                 success: false,
                  message: error.message,
                  
              })
           }
 }