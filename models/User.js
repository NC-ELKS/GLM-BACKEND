const userTable = {
  TableName: 'Users',
  KeySchema: [
    {
      AttributeName: 'username',
      KeyType: 'HASH'
    }
  ],
  AttributeDefinitions: [
    {
      AttributeName: 'username',
      AttributeType: 'S'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  }
};

module.exports = userTable;
