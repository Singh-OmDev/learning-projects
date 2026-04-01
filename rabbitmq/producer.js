const amqp = require("amqplib");

async function sendMail() {
  try {
    // connect to RabbitMQ
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    const exchange = "mail_exchange";
    const routingKey = "send_mail";

    const message = {
      to: "rahul@gmail.com",
      from: "harish@gmail.com",
      subject: "Hello TP mail",
      body: "Hello Om Singh!!"
    };

    // create exchange
    await channel.assertExchange(exchange, "direct", { durable: false });

    // create queue
    const queue = "mail_queue";
    await channel.assertQueue(queue, { durable: false });

    // bind queue to exchange
    await channel.bindQueue(queue, exchange, routingKey);

    // send message
    channel.publish(
      exchange,
      routingKey,
      Buffer.from(JSON.stringify(message))
    );

    console.log("✅ Message sent:", message);

    // close after some time
    setTimeout(() => {
      connection.close();
    }, 500);

  } catch (error) {
    console.error("❌ Error:", error);
  }
}

sendMail();