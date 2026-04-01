const amqp = require("amqplib");

async function sendMail(userType) {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    const exchange = "mail_exchange";

    const routingKeyForSubuser = "send_mail_to_subscribed_users";
    const routingKeyForNormalUser = "send_mail_to_normal_users";

    const subscribedQueue = "subscribed_users_mail_queue";
    const normalQueue = "users_mail_queue";

    const message = {
      to: "rahul@gmail.com",
      from: "harish@gmail.com",
      subject: "Hello TP mail",
      body: `Hello ${userType} user!!`
    };

    // create exchange
    await channel.assertExchange(exchange, "direct", { durable: false });

    // create queues
    await channel.assertQueue(subscribedQueue, { durable: false });
    await channel.assertQueue(normalQueue, { durable: false });

    // bind queues
    await channel.bindQueue(subscribedQueue, exchange, routingKeyForSubuser);
    await channel.bindQueue(normalQueue, exchange, routingKeyForNormalUser);

    // 🎯 Decide routing key dynamically
    let routingKey;

    if (userType === "subscribed") {
      routingKey = routingKeyForSubuser;
    } else {
      routingKey = routingKeyForNormalUser;
    }

    // send message to ONE queue only
    channel.publish(
      exchange,
      routingKey,
      Buffer.from(JSON.stringify(message))
    );

    console.log(`✅ Message sent to ${userType} queue`);

    setTimeout(() => connection.close(), 500);

  } catch (error) {
    console.error("❌ Error:", error);
  }
}

// 👉 change here manually
sendMail("normal"); // or "subscribed"