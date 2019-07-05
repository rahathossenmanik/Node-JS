var fs = require('fs');
fs.writeFile('mynewfile3.txt', 'I am Manik Hosen', function (err) {
	if (err) throw err;
	console.log('Replaced!');
});