import { Worker } from "bullmq";
import redis from "../config/redis.js";
import Notification from "../models/Notification.js";


const worker = new Worker(
  "notificationQueue",

  async (job) => {

    console.log("Processing Job:", job.data);

    await Notification.create({
      user: job.data.userId,
      title: job.data.title,
      message: job.data.message,
      type: job.data.type,
    });

  },

  {
    connection: redis,
  }
);