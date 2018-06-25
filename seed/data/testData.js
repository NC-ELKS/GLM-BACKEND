const userData = [
  {
    firstname: "Liam",
    surname: "Freeman",
    username: "LFreeman1",
    friends: ["Seth20", "KKDavidson", "El_Orsborn"]
  },
  {
    firstname: "Seth",
    surname: "Bell",
    username: "Seth20",
    friends: []
  },
  {
    firstname: "Kirstie",
    surname: "Davidson",
    username: "KKDavidson",
    friends: ["LFreeman1", "El_Orsborn"]
  },
  {
    firstname: "Elliot",
    surname: "Orsborn",
    username: "El_Orsborn",
    friends: ["KKDavidson", "LFreeman1"]
  }
];

const messageData = [
  {
    msgPoster: "KKDavidson",
    content: "Here's a fun new message!",
    latitude: 53.486435,
    longitude: -2.238913,
    recipients: [{ user: "LFreeman1", read: false }],
    timestamp: Date.now()
  },
  {
    msgPoster: "El_Orsborn",
    content: "I woz here",
    latitude: 53.486435,
    longitude: -2.238913,
    recipients: [{ user: "KKDavidson", read: true }],
    timestamp: Date.now()
  },
  {
    msgPoster: "LFreeman1",
    content: "Let's send Seth a message!",
    latitude: 53.301563,
    longitude: -2.368405,
    recipients: [{ user: "Seth20", read: false }],
    timestamp: Date.now() - 10000
  }
];

module.exports = { userData, messageData };
