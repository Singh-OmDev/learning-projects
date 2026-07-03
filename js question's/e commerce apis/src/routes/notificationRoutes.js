import express from "express";

 import {createNotification } from  "../controllers/notificationController.js";
  import{getNotifications} from "../controllers/notificationController.js";

  import {protect} from "../middleware/authMiddleware.js";

   import {markAsRead} from "../controllers/notificationController.js";


import { notificationQueue }
from "../queues/notificationQueue.js";


 const router = express.Router ();

  router.post ("/", protect, createNotification);

router.post(
  "/test-queue",

  async (req, res) => {

    await notificationQueue.add(
      "notification",

      {
        message:
          "Hello BullMQ",
      }
    );

    res.json({
      success: true,
    });

  }
);
   router.get ("/", protect,   getNotifications);
    router.patch ("/:id/read", protect, markAsRead);


  export default router;
