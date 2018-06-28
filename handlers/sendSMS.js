const { twilioSID, twilioAuth, twilioNum } = require('../config')
const client = require('twilio')(twilioSID, twilioAuth);

module.exports = (message) => {
    console.log(message, '******')
    client.messages.create({
        body: `Hi ${message.recipient} You've got a new ELKS message waiting for you, go find it! ${message.content}`,
        from: twilioNum,
        to: '+447539144770'
    })
        .then(message => console.log(`Message ${message.sid} sent`))
        .done();
}