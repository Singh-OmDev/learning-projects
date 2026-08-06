const jwt = require ("jsonwebtoken");

 const prisma = require ("../config/prisma");

  const protect = async  (req, res, next)=> {
      try {

         let token;

          //check authroization header
           if ( 
             req.headers.authorization  &&
              req.headers.authorization.startsWith( "Bearer")
           )
            {
                 token = req.headers.authorization.split(" ") [1];

            }
             //  when no token 
              if (!token){
                 return res.status(401).json({
                    success: false,
                     message: "not authorized , no token procided",


                 });

              }
               //verfiy jwt token 
                const decoded = jwt.verify(token , process.env.JWT_SECRET);
                 //find the user
                   const user = await prisma.user.findUnique({
                     where :{
                         id: decoded.userId,

                         
                     },
                   });

                    if (!user){
                         return res.status (401).json ({
                             success: false,
                              message: "user not found",

                         });
                    }
                     //attach user to request 

                      req.user  = user;
                       next ();


               
      }

       catch ( error){
         return res.status (401).json ({
             success: false,
               message: "invalid or expired token",

         });
       };




  }

   module .exports  = protect;