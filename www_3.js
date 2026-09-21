const http = require('http');
//moodul päringu parsimiseks
const url = require('url');
//moodul failitee haldamiseks
const path = require('path');
//moodul failide haldamiseks, ASYNC puhul on vaja seda toetavat erilisemat moodulit
//const fs = require('fs');
const fs = require('fs').promises;
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>ANGMON kodutöö</title>\n</head>\n<body>\n';
const pageBody = '\t<h1>ANGMON, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna ülikoolis</a> ning ei sisalda tõsiseltvõetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, peatselt programmeerime.</p>\n\t<hr>';
const pageBanner = '<img src="veebiprogrammeerimine_2026_TA.png" alr="">';
const dateET = require('./src/dateTimeET');
const pageFoot = '\n</body>\n</html>';

http.createServer(async function(req, res){
	//parsin url-i
	console.log('Päring: ' + req.url);
	let currentURL = url.parse(req.url, true);
	console.log('Parsituna: ' + currentURL.pathname);
	
	//hakkame erinevaid lehti jaotama -> routes (marsruudid)
	
	if(currentURL.pathname === '/'){
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(pageHead);
		res.write(pageBanner);
		res.write(pageBody);
		res.write('\n\t<p>Täna on: ' + dateET.fullWeekday() + '. ');
		res.write('\n\t<p>Kuupäev on: ' + dateET.fullDate() + '. ');
		res.write('\n\t<p>Kell on: ' + dateET.fullTime() + '. ');
		res.write('\n\t<ul>\n\t\r<li><a href="/vanasona">Tänane vanasõna</a></li>');
		res.write('\n\t</ul>');
		res.write(pageFoot);
		//res.write('Veeb läkski käima!');
		return res.end();
	}
	
	else if (currentURL.pathname === '/vanasona'){
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(pageHead);
		res.write(pageBanner);
		res.write('\t<h1>Eesti vanasõnad.</h1>\n\t<p>Siin näed tänase päeva vanasõna.</p>\n\t<hr>');
		// KODUTÖÖ KOHT!!!!!!!!!!!!!!!!!!!!!!!
		res.write('\n\t<p><a href="/">Tagasi avalehele</a></p>');
		res.write(pageFoot);
		//res.write('Veeb läkski käima!');
		return res.end();
	}
	
	else if (currentURL.pathname === '/veebiprogrammeerimine_2026_TA.png'){
		//teeme pildi tegeliku asukoha programmile kättesaadavaks
		let picPath = path.join(__dirname, 'pic', currentURL.pathname);
		//console.log(picPath);
		try {
			const data = await fs.readFile(picPath);
			res.writeHead(200, {"Content-type": "image/jpeg"});
			// image/jpeg töötab kaa
			res.end(data);
		} catch (err) {
			res.writeHead(404, {"Content-type": "text/plain; charset=utf8"});
			return res.end('Pilti ei leitud!');
		}
		//fs.readFile(picPath + currentURL.pathname, (err, data)=>{
		//	if(err){
		//		throw(err);
		//	} else {
		//		res.writeHead(200, {"Content-type": "image/jpeg"});
		//		res.end(data);
		//	}
		//});
	}
	
	else {
		res.end('Viga 404, ei leia sellist lehte!');
	}
}).listen(5108);

// \n - new line?