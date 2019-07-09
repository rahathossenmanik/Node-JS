var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'rahathossenmanik@gmail.com',
		pass: '77776666'
	}
});
var mailOptions = {
	from: 'rahathossenmanik@gmail.com',
	to: 'mahbub.shafquat@gmail.com',
	subject: 'Power of Node.js',
	text: 'Ha ha ha ha ha!'
};
transporter.sendMail(mailOptions, function(error, info){
	if (error) {
		console.log(error);
	}else {
		console.log('Email sent: ' + info.response);
	}
});