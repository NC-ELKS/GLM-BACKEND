const AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-west-2'
});

const database = new AWS.DynamoDB();

const params = {
  TableName: 'Users'
};

database.deleteTable(params, (err, data) => {
  if (err) console.log('Error in deleting table', params.TableName);
  else console.log('Completed deletion of table', params.TableName);
});
