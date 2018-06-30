const uuidv4 = require("uuid/v4");

const userData = [
  {
    firstname: "Liam",
    surname: "Freeman",
    username: "LFreeman1",
    friends: ["Seth20", "KKDavidson", "El_Orsborn"],
    mobile: '+447539144770'
  },
  {
    firstname: "Seth",
    surname: "Bell",
    username: "Seth20",
    friends: ["KKDavidson", "El_Orsborn", 'LFreeman1'],
    mobile: '+447961245295'
  },
  {
    firstname: "Kirstie",
    surname: "Davidson",
    username: "KKDavidson",
    friends: ["LFreeman1", "El_Orsborn", "Seth20"],
    mobile: '+447876794423'
  },
  {
    firstname: "Elliot",
    surname: "Orsborn",
    username: "El_Orsborn",
    friends: ["KKDavidson", "LFreeman1", "Seth20"],
    mobile: '+447572590564'
  }
];

const messageData = [
  {
    msgPoster: "KKDavidson",
    content: "Here's a message from Angel Meadows!",
    latitude: 53.489269,
    longitude: -2.236027,
    recipient: "LFreeman1",
    read: false,
    timestamp: Date.now(),
    messageid: uuidv4()
  },
  {
    msgPoster: "El_Orsborn",
    content: "Hey from Manchester Arena",
    latitude: 53.488368,
    longitude: -2.24277,
    recipient: "LFreeman1",
    read: true,
    timestamp: Date.now(),
    messageid: uuidv4()
  },
  {
    msgPoster: "LFreeman1",
    content: "Let's send Seth a message!",
    latitude: 53.476714,
    longitude: -2.23596,
    recipient: "Seth20",
    read: false,
    timestamp: Date.now() - 10000,
    messageid: uuidv4()
  },
  {
    msgPoster: "El_Orsborn",
    content: "Using my Locals Card!",
    latitude: 53.486744,
    longitude: -2.239904,
    recipient: "LFreeman1",
    read: true,
    timestamp: Date.now(),
    messageid: uuidv4()
  },
  {
    msgPoster: "Seth20",
    content: "Football's coming home!",
    latitude: 53.485623,
    longitude: -2.242133,
    recipient: "LFreeman1",
    read: true,
    timestamp: Date.now(),
    messageid: uuidv4()
  },
  {
    msgPoster: "LFreeman1",
    content: "Friday drinks at the Pilcrow!",
    latitude: 53.486767,
    longitude: -2.240115,
    recipient: "Seth20",
    read: false,
    timestamp: Date.now(),
    messageid: uuidv4()
  }
];

module.exports = { userData, messageData };
