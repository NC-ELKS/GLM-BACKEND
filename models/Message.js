const messageTable = {
  TableName: "Messages",
  KeySchema: [
    {
      AttributeName: "recipient",
      KeyType: "HASH"
    },
    {
      AttributeName: "messageid",
      KeyType: "RANGE"
    }
  ],
  AttributeDefinitions: [
    {
      AttributeName: "recipient",
      AttributeType: "S"
    },
    {
      AttributeName: "messageid",
      AttributeType: "S"
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  }
};

module.exports = messageTable;
