var budget = +prompt("Ваш бюджет?");
var shopName = prompt("Название магазина?");
var mainList = {
	listBudget : budget,
	listShopName : shopName,
	listShopGoods :[],
	listEmployees: ["Sam", "Mary", "John", "Michael"],
	open: true
}

for ( var i = 0 ; i < 3; ++i ) {
	var goodType = prompt("Какой тип товара будем продавать?");

	if ( (goodType != null) && (goodType != 0) && (goodType.length() < 50) ) {
		mainList.listShopGoods[i] = goodType;
	} else {
		console.log("Bad string.")
	}

}

/*
var i = 0;
while ( i < 3 ) {
	var goodType = prompt("Какой тип товара будем продавать?");

	if ( (goodType != null) && (goodType != 0) && (goodType.length() < 50) ) {
		mainList.listShopGoods[i] = goodType;
	} else {
		console.log("Bad string.")
	}
	++i;
}
*/

/*
var i = 0;
do {
	var goodType = prompt("Какой тип товара будем продавать?");

	if ( (goodType != null) && (goodType != 0) && (goodType.length() < 50) ) {
		mainList.listShopGoods[i] = goodType;
	} else {
		console.log("Bad string.")
	}
	++i;
} while ( i <= 3 )
*/


for ( var i = 0 ; i < 3; ++i ) {
	console.log(mainList.listShopGoods[i]);
}

console.log("Ваш бюджет на 1 день - " + (mainList.listBudget/30) + " рублей.");