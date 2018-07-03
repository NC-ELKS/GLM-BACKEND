const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (recipient, messageid) => {
    let params = {
        TableName: "Messages",
        Key: {
            "recipient": recipient,
            "messageid": messageid
        },
        UpdateExpression: "set readstatus = :r",
        ExpressionAttributeValues: { ":r": true },
        ReturnValues: "ALL_NEW"
    };
    return dynamoDb.update(params).promise();
};
