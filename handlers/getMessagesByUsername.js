const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = recipient => {
  let params = {
    TableName: "Messages",
    KeyConditionExpression: "recipient = :recipient",
    ExpressionAttributeValues: {
      ":recipient": recipient
    }
  };
  return dynamoDb.query(params).promise();
};
