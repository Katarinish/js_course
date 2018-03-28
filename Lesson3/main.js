var budget = 0;
var shopName = 0;
var time = 0;
var price = 0;
var mainList = {
	listBudget : budget,
	listShopName : shopName,
	listShopGoods :[],
	listEmployers: {},
	open: true,
	discount: true
}

function start() {
	budget = +prompt("Ваш бюджет?");
	while ( isNaN(budget) || budget === "" || budget === null ) {
		console.log("Не похоже на бюджет, попробуй еще раз");
		budget = +prompt("Ваш бюджет?");
	}
	shopName = prompt("Название магазина?").toUpperCase();
	time = +prompt("Который час?");

	mainList.listBudget = budget;
	mainList.listShopName = shopName;;
}

function chooseGoods() {
	for ( var i = 0 ; i < 3; ++i ) {
		var goodType = prompt("Какой тип товара будем продавать?");

		if ( (goodType != null) && (goodType != 0) && (goodType.length < 50) ) {
			mainList.listShopGoods[i] = goodType;
		} else {
			console.log("Bad string.")
			--i;
		}
	}
}

function checkWorkTime(time) {
	if ( time < 0 ) {
		console.log("Упс, такого не бывает!");
	} else if ( time >= 8 && time <= 20 ) {
		console.log("Время работать!");
		} else if ( time <= 24) {
			console.log("Слишком поздно, пора спать");
			} else {
				console.log("В сутках только 24 часа!");
			}
}

function getDailyBudget(budget) {
	console.log("Ваш бюджет на 1 день - " + (budget/30) + " рублей.");
}

function ifSale() {
	if (mainList.discount) {
		price = Math.round(price*0.8)
	}
}

function hireEmployers() {
	let empl = 0;
	for (var i = 0; i < 4; ++i) {
		empl = prompt("Введите имя нового сотрудника", "Jake");
		mainList.listEmployers[i] = empl;
	}
}

start();
chooseGoods();
checkWorkTime();
hireEmployers();



console.log(mainList);