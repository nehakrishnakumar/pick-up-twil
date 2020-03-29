
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages
	.create ({
		body: 'kill this love bam bam bam bam bam bam yeahyeah yeah yeah!',
		from: '+15713785918',
		to: '+17038287144'
	})
	.then(message => console.log(message.sid));
