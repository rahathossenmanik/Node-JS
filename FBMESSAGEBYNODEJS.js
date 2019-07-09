const FBMessenger = require('fb-messenger')
const messenger = new FBMessenger({
	token: 'https://www.facebook.com/messages/t/shafquat.mahbub>', notificationType: 'NO_PUSH'
	})
try {
	messenger.sendTextMessage({id: 'https://www.facebook.com/messages/t/manik.df.cse', text: 'Hello'})
	console.log('Sent successfully')
}catch(e) {
	console.error(e)
}