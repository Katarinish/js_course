

var daysOfWeek = ["Понедельник", "Вторник", "Среда", 
"Четверг", "Пятница", "Суббота", "Воскресенье"];
var currentDay = prompt("Какой сегодня день недели? (Вводите с большой буквы)", "Понедельник");
var tmp = 0;

for (var i = 0; i < 7; ++i) {
	tmp = daysOfWeek[i];
	if ( tmp === currentDay) {
		console.log("%c%s", "font-style: italic", tmp );
	} else if ( (tmp === "Суббота") || (tmp == "Воскресенье") ) {
			console.log("%c%s", "font-weight: bold", tmp );
		} else {
				console.log(tmp);
			}
}





var arr = ["7007", "7389", "333", "8578", "325587", "78965", "91145"];

for ( var i = 0 ; i < 7 ; ++i ) {
	tmp = arr[i];
	var toCheck = parseInt(tmp[0], 10);
	if (toCheck === 3 || toCheck === 7) {
		console.log(tmp);
	}
}