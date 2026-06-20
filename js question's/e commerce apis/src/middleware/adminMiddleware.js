export const isAdmin = (req, res, next)=> {
     try {
         if (!req.user){
             return res.status(401).json({message:"unauthorized"});

         }

         next();


     }
      catch (error){
         return res.status (500).json({message:"internal server error"});
         
      }
}