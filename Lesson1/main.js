var budget = +prompt("Ваш бюджет?");
var shopName = prompt("Название магазина?");
var mainList = {
	listBudget : 5000,
	listShopName : shopName,
	listShopGoods :[],
	listEmployees: ["Sam", "Mary", "John", "Michael"],
	open: true
}

for ( var i = 0 ; i < 3; ++i ) {
	var goodType = prompt("Какой тип товара будем продавать?");
	mainList.listShopGoods[i] = goodType;
}

console.log(mainList.listShopName);

for ( var i = 0 ; i < 3; ++i ) {
	console.log(mainList.listShopGoods[i]);
}

console.log("Ваш бюджет на 1 день - " + (budget/30) + " рублей.");