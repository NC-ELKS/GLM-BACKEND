'use strict';

const addMessage = require('./handlers/addMessage');
const getMessagesByUsername = require('./handlers/getMessagesByUsername');
const viewAllMessages = require('./handlers/viewAllMessages');
const getUserDetails = require('./handlers/getUserDetails');

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
  // Call a function with the newimage that sends it to the relevant phone?
  cb(null, null);
};

const getUser = (event, context, cb) => {
  getUserDetails(event.pathParameters.username)
    .then(result => {
      const response = {
        body: JSON.stringify(result)
      };
      cb(null, response);
    })
    .catch(cb);
};

module.exports = {
  createMessage,
  getUserMessages,
  getAllMessages,
  triggerStream,
  getUser
};
