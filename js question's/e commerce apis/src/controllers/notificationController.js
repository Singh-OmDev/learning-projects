import Notification from "../models/Notification.js";




export const createNotification = async (req, res)=> {

    try {
         const   {user, title , message, type} = req.body;



          const notification =  await Notification.create ({user, title, message, type});
          res.status (201).json ({success: true  , data: notification});






    }
     catch (error){
         res.status (500).json ({messsage: "server error", error: error.message});


     }
    }