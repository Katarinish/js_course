var num = 33721;
var res = 1;


while (num > 0) {
	var tmp = num % 10;
	num = parseInt(num/10);
	res *= tmp;
}

console.log(res);
//res ** =3; //как один из вариантов возведения в степень
res = Math.pow(res, 3);
console.log(res);