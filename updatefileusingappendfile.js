var fs = require('fs');
fs.appendFile('mynewfile1.txt', ' I am the owner of the file.', function (err) {
	if (err) throw err;
	console.log('Updated!');
});