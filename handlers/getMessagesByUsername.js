const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = username => {
  let params = {
    TableName: 'Messages',
    Key: { username }
  };
  return dynamoDb.get(params).promise();
};
