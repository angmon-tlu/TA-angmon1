const http = require('http');
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>ANGMON kodutöö</title>\n</head>\n<body>\n';
const pageBody = '\t<h1>ANGMON, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna ülikoolis</a> ning ei sisalda tõsiseltvõetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, peatselt programmeerime.</p>\n\t<hr>';
const fs = require('fs');
const dateET = require('./src/dateTimeET');
const pageFoot = '\n</body>\n</html>';

http.createServer(function(req, res){
	res.writeHead(200, {"Content-type": "text/html"});
	res.write(pageHead);
	res.write(pageBody);
	res.write('Täna on: ' + dateET.fullWeekday() + '. ');
	res.write('<br>Kuupäev on: ' + dateET.fullDate() + '. ');
	res.write('<br>Kell on: ' + dateET.fullTime() + '. ');
	res.write(pageFoot);
	//res.write('Veeb läkski käima!');
	return res.end();
}).listen(5108);

// \n - new line?