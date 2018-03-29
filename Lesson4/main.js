let budget = 0;
let shopName = 0;
let time = 0;
let price = 0;

let mainList = {
	listBudget : budget,
	listShopName : shopName,
	listShopGoods :[],
	listEmployers: {},
	listShopItems: [],
	open: false,
	discount: true,
	start: function start() {
		budget = +prompt("Ваш бюджет?", "");
		while ( isNaN(budget) || budget === "" || budget === null ) {
			console.log("Не похоже на бюджет, попробуй еще раз");
			budget = +prompt("Ваш бюджет?", "");
		}
		shopName = prompt("Название магазина?", "").toUpperCase();
		time = +prompt("Который час?", "");

		mainList.listBudget = budget;
		mainList.listShopName = shopName;		
	},
	chooseGoods: function chooseGoods() {
		for ( let i = 0 ; i < 3; ++i ) {
			var goodType = prompt("Какой тип товара будем продавать?", "");

			if ( (goodType != null) && (goodType != 0) && (goodType.length < 50) ) {
				mainList.listShopGoods[i] = goodType;
			} else {
				console.log("Bad string.")
				--i;
			}
		}
	},
	checkWorkTime: function checkWorkTime(time) {
		if ( time < 0 ) {
				console.log("Упс, такого не бывает!");
			} else if ( time >= 8 && time <= 20 ) {
				console.log("Время работать!");
				mainList.open = true;
				} else if ( time <= 24) {
					console.log("Слишком поздно, пора спать");
					mainList.open = false;
					} else {
						console.log("В сутках только 24 часа!");
					}
	},
	getDailyBudget: function getDailyBudget(budget) {
		console.log("Ваш бюджет на 1 день - " + (budget/30) + " рублей.");
	},
	ifSale: function ifSale() {
		if (mainList.discount) {
			price = Math.round(price*0.8)
		}
	},
	hireEmployers: function hireEmployers() {
		let empl = 0;
		for (let i = 0; i < 4; ++i) {
			empl = prompt("Введите имя нового сотрудника", "Jake");
			while (empl === null || empl == 0 || !isNaN(empl)) {
				alert("Введена неверное имя, попробуй еще раз");
				empl = prompt("Введите имя нового сотрудника", "Jake");
			}
			mainList.listEmployers[i] = empl;
		}
	},
	chooseShopItems: function() {
		let items = prompt("Введите товары через запятую","");
		while (items === null || items == 0 || !isNaN(items)){
			alert("Введена неверная строка, попробуйте заново");
			items = prompt("Введите товары через запятую","");
		}
		mainList.listShopItems = items.split(",").sort();
	},
}


function printItems() {
	console.log("У нас вы можете приобрести следующие товары:")
	mainList.listShopItems.forEach(function(item, index, arr) {
		console.log("Товар №:" + (index+1) + " " + item);
	});
};

function printKeys() {
	console.log("Наш магазин включает в себя:")
	for (let key in mainList) {
		console.log(key + " - " + mainList[key]);
	}
};

mainList.start();
mainList.chooseShopItems();
console.log(mainList);
printItems();
printKeys();