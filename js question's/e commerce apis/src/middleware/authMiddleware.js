import jsonwebtoken from "jsonwebtoken";


export const protect = (req, res, next)=> {
    try {
         const  authHeader = req.headers.authorization;

          if (!authHeader){
             return res.status(401).json({message:"no token provided"});


          }

           const token = authHeader.split(" ")[1];
            const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
            req.user = decoded.id;
            next();

    }
     catch (error){
         console.log(error);
         res.status(401).json({message:"invalid token"});

         
     }


}