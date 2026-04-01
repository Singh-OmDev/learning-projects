const amqp = require("amqplib");

async function recvMail() {
  try {
    // connect to RabbitMQ
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    const queue = "users_mail_queue";

    // make sure queue exists
    await channel.assertQueue(queue, { durable: false });

    console.log("📥 Waiting for messages...");

    // consume messages
    channel.consume("users_mail_queue", (msg) => {
      if (msg !== null) {
        const data = JSON.parse(msg.content.toString());

        console.log("📧 Mail Received from normal users:");
        console.log(data);

        // acknowledge message
        channel.ack(msg);
      }
    });

  } catch (error) {
    console.error("❌ Error:", error);
  }
}

recvMail();