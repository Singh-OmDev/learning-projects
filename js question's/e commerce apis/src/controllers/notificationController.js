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
export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification
      .find({ user: req.user })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: notifications,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      error: error.message,
    });
  }
};

 export const markAsRead = async  ( req, res)=> {
    try {
          const notification = await Notification.findById(req.params);


if (!notification ){
      return res.status (404).json ({message: "notification not found"});



}

 notification .isRead = true;
 await notification.save ();
 res.status (200).json ({success: true, data: notification});

    }
     catch (error){
         res.status (500).json ({message:  "server error", error: error.message});

         

     }
 }