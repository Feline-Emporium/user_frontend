import amqp from 'amqplib/callback_api.js';

amqp.connect('amqp://localhost', function (error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'hello';
    var msg = { name: 'John', age: 30 }

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
    console.log(" [x] Sent %s", msg);
  });

  setTimeout(function () {
    connection.close();
    process.exit(0)
  }, 500);
});

