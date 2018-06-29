const { twilioSID, twilioAuth, twilioNum } = require('../config')
const client = require('twilio')(twilioSID, twilioAuth);
const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (message) => {
    console.log(message, '***********************')
    let params = {
        TableName: "Users",
        KeyConditionExpression: "username = :username",
        ExpressionAttributeValues: {
            ":username": message.recipient.S
        }
    }
    dynamoDb.query(params).promise()
        .then(user => {
            client.messages.create({
                body: `Hi ${user.Items[0].firstname}! You've got a new ELKS message waiting for you, go find it!`,
                from: twilioNum,
                to: user.Items[0].mobile
            })
                .then(message => console.log(`Message ${message.sid} sent`))
                .done()
        }
        )
        .catch(err => console.log(err));
}