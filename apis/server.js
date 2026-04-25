const express = require('express');


 const app = express();

  app.use (express.json());



   let tasks = [];

    let currentId = 1;


    //home route;

     app.get("/", (req,res)=> {
         res.send("api is working");


     });

      //create a task;

      app.post ("/tasks", (req,res)=> {
         const {title} = req.body;

          if (!title || title.trim()=== ""){
             return res.status(400).json({message:"title is required"});


          }
          const newTask = {
             id: currentId++,
             title: title.trim (),
              completed:false
          };
           tasks.push (newTask);

            res.status(201).json(newTask);


      });







       //get all tasks;

        app.get ("/tasks", (req,res)=> {

             res.status(200).json ({
                 count: tasks.length,
                  tasks

             });

        });

         //get single task;
          app.get  ("/tasks/:id", (req,res)=> {
              const id = parseInt(req.params.id);
              const task = tasks.find(t=> t.id === id);

               if (!task){
                 return res.status(404).json({message:"task not found"});


               }

                res.status (200).json(task);

          });

          //update a task 

           app.put ("/tasks/:id", (req,res)=> {
        

              const id = parseInt(req.params.id);
               const {title, completed}= req.body;


                 const  task  = tasks.find (t=> t.id === id);

                  if (!task){
                     return res.status (404).json ({message:"task not found"});

                  }

                   if (title !== undefined){
                    if (title.trim () === ""){
                         return res.status (400).json({message:"title cannot be empty"});

                    }

                     task.title = title.trim ();

                   }
                    if ( completed !== undefined){
                        task.completed = completed;

                    }

                      if (title == undefined && completed === undefined){
                         return res.status (400).json({message: "no valid  filed to update"});


                      }
                       res.status (200).json(task);


           });

            //delete a task;

                app.delete ("/tasks/:id", (req,res)=> { 
                    const id = parseInt(req.params.id);
                     const taskIndex = tasks.findIndex (t=> t.id === id);       

                        if (taskIndex === -1){  
                            return res.status (404).json({message:"task not found"});

                        }   

                            tasks.splice (taskIndex,1); 

                                res.status (204).send();
                });

                  app.listen (3000, ()=> {
                     console.log ("server is running on port 3000");

                  });
