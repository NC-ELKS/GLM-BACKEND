"use strict";

const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuidv4 = require("uuid/v4");

module.exports = data => {
  let params = {
    TableName: "Messages",
    Item: {
      msgPoster: data.msgPoster,
      content: data.content,
      latitude: data.latitude,
      longitude: data.longitude,
      recipient: data.recipient,
      timestamp: Date.now(),
      messageid: uuidv4(),
      read: false
    }
  };
  return dynamoDb
    .put(params)
    .promise()
    .then(result => params.Item);
};
