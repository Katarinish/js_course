function calc() {
	//Calculator implementation
	let persons = document.getElementsByClassName("counter-block-input")[0];
	let restDays = document.getElementsByClassName("counter-block-input")[1];
	let place = document.getElementById("select");
	let totalValue = document.getElementById("total");

	let total = 0;
	let personSum = 0;
	let daySum = 0;

	totalValue.textContent = total;

	persons.addEventListener("change", function() {
		//personSum = +this.value;
		personSum = parseInt(this.value, 10)
		total = (personSum + daySum) * 4000;
		if (restDays.value <= 0) {
			totalValue.textContent = 0;
		} else {
			total*= place.options[place.selectedIndex].value;
			totalValue.textContent = total;
		}

	});

	restDays.addEventListener("change", function() {
		//daySum = +this.value;
		daySum = parseInt(this.value, 10)

		total = (personSum + daySum) * 4000;
		if (persons.value <= 0) {
			totalValue.textContent = 0;
		} else {
			total*= place.options[place.selectedIndex].value;
			totalValue.textContent = total;
		}
	});

	place.addEventListener("change", function() {
		total = (personSum + daySum) * 4000;
		if (persons.value <= 0 || restDays.value <= 0) {
			totalValue.textContent = 0;
		} else {
			total*= this.options[this.selectedIndex].value;
			totalValue.textContent = total;
		}
	});
}

module.exports = calc;