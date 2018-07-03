'use strict';

const addMessage = require('./handlers/addMessage');
const getMessagesByUsername = require('./handlers/getMessagesByUsername');
const viewAllMessages = require('./handlers/viewAllMessages');
const getUserDetails = require('./handlers/getUserDetails');
const sendSMS = require('./handlers/sendSMS')
const sendReadSMS = require('./handlers/sendReadSMS')
const markMessageRead = require('./handlers/markMessageRead');


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

const triggerDataStream = (event, context, cb) => {
  console.log(event, '******************')
  console.log('Trigger stream was called');
  const eventData = event.Records[0];
  if (eventData.eventName === 'INSERT') sendSMS(eventData.dynamodb.NewImage)
  if (eventData.eventName === 'MODIFY') sendReadSMS(event.dynamodb);
  else cb(null, null);
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

const changeMessageStatus = (event, context, cb) => {
  const { recipient, messageid } = event.pathParameters
  markMessageRead(recipient, messageid)
    .then(result => {
      console.log(result, '********')
      const response = {
        body: JSON.stringify(result)
      };
      cb(null, response)
    })
    .catch(cb)
}

module.exports = {
  createMessage,
  getUserMessages,
  getAllMessages,
  triggerDataStream,
  getUser,
  changeMessageStatus
};
