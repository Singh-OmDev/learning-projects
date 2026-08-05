 const prisma = require ("../config/prisma");


  const bcrypt = require ("bcryptjs");
   
   const registerUser = async ( userData) => {
     const {name , email , password} = userData;

        const  existingUser = await prisma.user.findUnique ({
             where : {
                 email, 
             },

        });

         if ( existingUser){
             throw new Error  ("user already exists");

         }

          const hashedPassword = await bcrypt .hash (password, 10);
            const  user = await  prisma.user.create ({
                 data: {
                     name ,
                      email , password : hashedPassword,
                 },
            });

             return user;

      
   };
    moduel.exports = {
         registerUser,
    }