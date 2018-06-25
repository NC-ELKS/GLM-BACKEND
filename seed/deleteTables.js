const AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-west-2"
});

const database = new AWS.DynamoDB();

const userParams = {
  TableName: "Users"
};

const messageParams = {
  TableName: "Messages"
};

database.deleteTable(userParams, (err, data) => {
  if (err) console.log("Error in deleting table", userParams.TableName);
  else console.log("Completed deletion of table", userParams.TableName);
});

database.deleteTable(messageParams, (err, data) => {
  if (err) console.log("Error in deleting table", messageParams.TableName);
  else console.log("Completed deletion of table", messageParams.TableName);
});
