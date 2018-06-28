const { twilioSID, twilioAuth, twilioNum } = require('../config')
const client = require('twilio')(twilioSID, twilioAuth);

module.exports = (message) => {
    client.messages.create({
        body: `Hi ${message.recipient.S} You've got a new ELKS message waiting for you, go find it!`,
        from: twilioNum,
        to: '+447539144770'
    })
        .then(message => console.log(`Message ${message.sid} sent`))
        .done();
}