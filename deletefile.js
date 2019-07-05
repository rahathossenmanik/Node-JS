var fs = require('fs');
fs.unlink('myrenamedfile2.txt', function (err) {
	if (err) throw err;
	console.log('File deleted!');
});