const messageTable = {
  TableName: "Messages",
  KeySchema: [
    {
      AttributeName: "msgPoster",
      KeyType: "HASH"
    },
    {
      AttributeName: "timestamp",
      KeyType: "RANGE"
    }
  ],
  AttributeDefinitions: [
    {
      AttributeName: "msgPoster",
      AttributeType: "S"
    },
    {
      AttributeName: "timestamp",
      AttributeType: "N"
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  }
};

module.exports = messageTable;
