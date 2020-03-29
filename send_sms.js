
const accountSid='ACaebfb3e4ad8b2040735d948452538e7e';
const authToken='c005fa545056781b692556e0684cd65b';
const client=require('twilio')(accountSid, authToken);

client.messages
	.create ({
		body: 'kill this love bam bam bam bam bam bam yeahyeah yeah yeah!',
		to: '+17038287144',
		from: '+15713785918'
	})
	.then(message => console.log(message.sid));
