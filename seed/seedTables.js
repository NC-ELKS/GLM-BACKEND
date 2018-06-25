'use strict';

const AWS = require('aws-sdk');
const userTable = require('../models/User');

AWS.config.update({
  region: 'eu-west-2'
});

const database = new AWS.DynamoDB();

database.createTable(userTable, (err, data) => {
  if (err)
    console.log('Could not create table. Error:', JSON.stringify(err, null, 2));
  else console.log(userTable.name, 'successfully created');
});
