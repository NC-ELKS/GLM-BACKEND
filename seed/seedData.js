"use strict";

const AWS = require("aws-sdk");
const { userData, messageData } = require("./data/testData");

AWS.config.update({
  region: "eu-west-2"
});

const docClient = new AWS.DynamoDB.DocumentClient();

userData.forEach(user => {
  let params = {
    TableName: "Users",
    Item: {
      firstname: user.firstname,
      surname: user.surname,
      username: user.username,
      friends: user.friends,
      mobile: user.mobile
    }
  };

  docClient.put(params, (err, data) => {
    if (err)
      console.log(
        "Could not create user.",
        user.username,
        "Error:",
        JSON.stringify(err, null, 2)
      );
    else console.log("Successfully added user", user.username);
  });
});

messageData.forEach(message => {
  const {
    msgPoster,
    content,
    latitude,
    longitude,
    recipient,
    timestamp,
    messageid,
    read
  } = message;

  let params = {
    TableName: "Messages",
    Item: {
      msgPoster,
      content,
      latitude,
      longitude,
      recipient,
      timestamp,
      messageid,
      read
    }
  };

  docClient.put(params, (err, data) => {
    if (err)
      console.log(
        "Could not create message.",
        message.content,
        "Error:",
        JSON.stringify(err, null, 2)
      );
    else console.log("Successfully added message", message.content);
  });
});
