const dateFormattedET = function(){
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let yearNow = timeNow.getFullYear();
	let monthNow = timeNow.getMonth();
	const monthNamesET = ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'];
	return timeNow.getDate() + '.' + monthNamesET[timeNow.getMonth()] + ' ' + timeNow.getFullYear();
}

const timeFormattedET = function(){
	let timeNow = new Date();
	let hourNow = timeNow.getHours();
	let minuteNow = timeNow.getMinutes();
	let secondNow = timeNow.getSeconds();
	if (hourNow < 10){
		hourNow = '0' + hourNow;
	}
	if (minuteNow < 10){
		minuteNow = '0' + minuteNow;
	}
	if (secondNow < 10){
		secondNow = '0' + secondNow;
	}
	let timeFormatted = hourNow + ' : ' + minuteNow + ' : ' + secondNow;
	return timeFormatted;
}

const weekdayET = function(){
	let weekDay = new Date().getDay();
	const weekdayNamesET = ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev'];
	return weekdayNamesET[weekDay];
}

//ekspordin kõik vajaliku

module.exports = {fullDate: dateFormattedET, fullTime: timeFormattedET, fullWeekday: weekdayET};