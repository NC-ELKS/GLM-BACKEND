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
    msgPoster: "El_Orsborn",
    content: "This is working!",
    latitude: 53.486435,
    longitude: -2.238913,
    recipient: "KKDavidson",
    read: true,
    timestamp: Date.now()
  },
  {
    msgPoster: "Seth20",
    content: "I am Seth",
    latitude: 53.486495,
    longitude: -2.238917,
    recipient: "LFreeman1",
    read: true,
    timestamp: Date.now()
  },
  {
    msgPoster: "LFreeman1",
    content: "I am like to make stuff",
    latitude: 53.486495,
    longitude: -2.238917,
    recipient: "Seth20",
    read: false,
    timestamp: Date.now()
  }
];

module.exports = { userData, messageData };
