"use strict";

const ApiBuilder = require("claudia-api-builder"),
  api = new ApiBuilder();

const AWS = require("aws-sdk"),
  database = new AWS.DynamoDB();

api.get("/users", () => {
  return database
    .scan({ TableName: "Users" })
    .promise()
    .then(res => res.Items);
});

module.exports = api;
