'use strict';

const AWS = require('aws-sdk');
const userData = require('./data/testData');

AWS.config.update({
  region: 'eu-west-2'
});

const docClient = new AWS.DynamoDB.DocumentClient();

userData.forEach(user => {
  let params = {
    TableName: 'Users',
    Item: {
      firstname: user.firstname,
      surname: user.surname,
      username: user.username,
      friends: user.friends
    }
  };

  docClient.put(params, (err, data) => {
    if (err)
      console.log(
        'Could not create user.',
        user.username,
        'Error:',
        JSON.stringify(err, null, 2)
      );
    else console.log('Successfull added user', user.username);
  });
});
