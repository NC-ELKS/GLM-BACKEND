'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

module.exports = data => {
  let params = {
    TableName: 'Messages',
    Item: {
      msgPoster: data.msgPoster,
      content: data.content,
      latitude: data.latitude,
      longitude: data.longitude,
      recipients: data.recipients,
      timestamp: Date.now(),
      messageid: uuid.v1()
    }
  };
  return dynamoDb
    .put(params)
    .promise()
    .then(result => params.Item);
};
