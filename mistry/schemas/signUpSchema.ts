import  {z} from 'zod';

 export const usernameValidation = z
 .string ()

 .min (2,  "username must  be at least 2 characters long")
 .max (30, "username must be at most 30 characters long")
    .regex (/^[a-zA-Z0-9_]+$/, "username can only contain letters, numbers, and underscores")       

     export const signupSchema = z.object({
         username: usernameValidation,
          email: z.string().email ({message:'invalid  email address'}),
           password: z.string ().min (8, "password must be at least 8 characters long") 
           
     })