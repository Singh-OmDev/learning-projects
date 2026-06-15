import express from "express";

const app = express ();
 app.use (express.json());
  app.use (express.urlencoded({extended:true}));


 

  app.post ("/add-students", (req,res)=> {
      const{ name, age, city, gender } = req.body;
     res.send("student data added successfully");
    console.log (`name: &{name} , age: & {age}, city: &{city}, genderbc: {gender}`); 
  })
   app.listen (8080, ()=> {
     console.log ("server is running on port  8080");


   })

    app.get ("/students", (req, res)=> {
    
         
        

          const students = [
             {
                 name: "om",
                  age: 22,
                  city: "ballia",

             },


              {
                 name : "rahul",
                  age : 22,
                   city: "delhi",
                   gender: "male",
              },

               {

               
               name : "sumit",
                age : 11,
                 gender: "male",
                  city :"up",
               }
          ]
           
        
           
           res.send (students);
            res.status (200)
            {
                 console.log (students);
            }
            
    })


     app.put ("/update",  (req,res)=> {
 const {name , age , city , gender} = req.body;
   const updatedStudent = {
    name:name,
     age: age,
      city: city,
       gender: gender,

   }
    res.send (updatedStudent);
    
     console.log (`name: &{name}, age: {age}, city: &{city}, gender: &{gender}`);

 console.log ("student data updated successfully hehehhehe ehhe") ;
            



     })
      app.patch ("/update-student", (req,res)=> {

         const {name} = req.body;
          res.send (`student name updated successfully to $ {name}`);
           console.log (`student name updated successfully to ${name}`);



      })

         app.delete ("delete-student", (req, res)=> {
             const{name , age , city} = req.body;
             
              res.send (`student data deleted successfully for $ {name}`);
               console.log  (`student data deleted successfully for ${name}`);
         })

