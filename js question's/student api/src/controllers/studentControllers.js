import Student from "../models/studentModel.js";

export const createStudent = async (req, res)=> {


    try {
         req.body;
         const student = await Student.create(req.body);
         res.status (201).json ({
             success:true,
              data :student,
            })
             
         
        }
         catch (error ){
             res.status (500).json ({
                 success:false,
                 message:"student data is not created",

             });
             
         }
}