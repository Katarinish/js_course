let arr = [];

function createArray(){
	let count = +prompt("Сколько массивов включить во внутрь arr?","5");
	while ( isNaN(count) ) {
		alert("Неверынй формат строки");
		count = +prompt("Сколько массивов включить во внутрь arr?","5");
	}
	while ( count-- > 0 ) {
		arr.push([]);
	}
	arr.forEach(function(elem){
		for(let i = 0; i < 5; ++i) {
			elem.push(i);
		}
	});
	let sum = 0;
	arr.forEach(function(elem){
		for(let i = 0; i < elem.length; ++i) {
			sum+=elem[i];
		}
	});
	console.log("Cумма всех элементов матрицы = " + sum);
}

function printArray(arr) {
	arr.forEach(function(elem){
		console.log(elem);
	});
}

createArray();
printArray(arr);

