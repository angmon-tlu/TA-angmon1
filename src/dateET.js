exports.dateFormattedET = function(){
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let yearNow = timeNow.getFullYear();
	let monthNow = timeNow.getMonth();
	const monthNamesET = ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'];
	return timeNow.getDate() + '.' + monthNamesET[timeNow.getMonth()] + ' ' + timeNow.getFullYear();
}