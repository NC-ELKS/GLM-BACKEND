'use strict';

const addMessage = require('./handlers/addMessage');
const getMessagesByUsername = require('./handlers/getMessagesByUsername');
const viewAllMessages = require('./handlers/viewAllMessages');

const createMessage = (event, context, cb) => {
  const data = JSON.parse(event.body);
  addMessage(data)
    .then(result => {
      const response = {
        body: JSON.stringify(result)
      };
      cb(null, response);
    })
    .catch(cb);
};

const getUserMessages = (event, context, cb) => {
  getMessagesByUsername(event.pathParameters.recepient)
    .then(result => {
      const response = {
        body: JSON.stringify(result)
      };
      cb(null, response);
    })
    .catch(cb);
};

const getAllMessages = (event, context, cb) => {
  viewAllMessages()
    .then(result => {
      const response = {
        body: JSON.stringify(result)
      };
      cb(null, response);
    })
    .catch(cb);
};

const triggerStream = (event, context, cb) => {
  console.log('Trigger stream was called');

  const eventData = event.Records[0];
  console.log(eventData.dynamodb.NewImage);

  cb(null, null);
};

module.exports = {
  createMessage,
  getUserMessages,
  getAllMessages,
  triggerStream
};
