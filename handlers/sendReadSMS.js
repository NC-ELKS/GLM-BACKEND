const { twilioSID, twilioAuth, twilioNum } = require('../config')
const client = require('twilio')(twilioSID, twilioAuth);
const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (message) => {
    let params = {
        TableName: "Users",
        KeyConditionExpression: "username = :username",
        ExpressionAttributeValues: {
            ":username": message.msgPoster.S
        }
    }
    dynamoDb.query(params).promise()
        .then(user => {
            client.messages.create({
                body: `Hi ${user.Items[0].firstname}! Your message you left for ${message.recipient.S} has been read!`,
                from: twilioNum,
                to: user.Items[0].mobile
            })
                .then(message => console.log(`Message ${message.sid} sent`))
                .done()
        }
        )
        .catch(err => console.log(err));
}