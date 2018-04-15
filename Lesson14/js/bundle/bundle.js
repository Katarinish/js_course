(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener("DOMContentLoaded", function(){

	let tabs = require("../modules/tabs.js");
	let calc = require("../modules/calc.js");
	let popup = require("../modules/popup.js");
	let slider = require("../modules/slider.js");
	let timer = require("../modules/timer.js");

	/*createTimer();
	createPopUp();
	createSlider();
 	createCalc();
 	createTabs();*/
 	tabs();
 	calc();
 	popup();
 	slider();
 	timer();
});
},{"../modules/calc.js":2,"../modules/popup.js":3,"../modules/slider.js":4,"../modules/tabs.js":5,"../modules/timer.js":6}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
function popup() {
	//Creating PopUpWindow
	let popUpBtn = document.querySelector(".more");
	let overlayWindow = document.querySelector(".overlay");
	let closePopUp = overlayWindow.querySelector(".popup-close");
	popUpBtn.addEventListener("click", function(){
		this.classList.add("more-splash");
		overlayWindow.style.display = "block";
		document.body.style.overflow = "hidden";
	});
	closePopUp.addEventListener("click", function(){
		popUpBtn.classList.remove("more-splash");
		for (let i = 0; i < descrBtns.length; ++i){
			descrBtns[i].classList.remove("more-splash");
		}
		overlayWindow.style.display = "none";
		document.body.style.overflow = "";
	});
}

module.exports = popup;
},{}],4:[function(require,module,exports){
function slider() {
	//Slider implementation
	let sliderIndex = 1;
	let slides = document.getElementsByClassName("slider-item");
	let prev = document.querySelector(".prev");
	let next = document.querySelector(".next");
	let dotsWrap = document.querySelector(".slider-dots");
	let dots = document.getElementsByClassName("dot");

	showSlides(sliderIndex);
	function showSlides(n) {
		if (n > slides.length) {
			sliderIndex = 1;
		};
		if ( n < 1) {
			sliderIndex = slides.length;
		};
		for ( let i = 0; i < slides.length; ++i) {
			slides[i].style.display = "none";
		}
		for ( let i = 0; i < dots.length; ++i ) {
			dots[i].classList.remove("dot-active");
		}
		slides[sliderIndex - 1].style.display = 'block';
		dots[sliderIndex - 1].classList.add("dot-active");
	};

	function addSlides(n) {
		showSlides(sliderIndex += n);
	};
	function currentSlide(n) {
		showSlides(sliderIndex = n);
	};

	next.addEventListener("click", () => {
		addSlides(1);
	});
	prev.addEventListener("click", () => {
		addSlides(-1);
	});

	dotsWrap.addEventListener("click", (event) => {
		let trg = event.target;
		for (let i = 0; i < dots.length ; ++i) {
			if (trg === dots[i]) {
				currentSlide(i+1);
			}
		}
	});
}

module.exports = slider;
},{}],5:[function(require,module,exports){
function tabs(){
	//Creating Tabs
	let infoTabs = document.getElementsByClassName("info-header-tab");
	let infoTabContents = document.getElementsByClassName("info-tabcontent");
	let infoHeader =  document.querySelector(".info-header");
	let infoBlock = document.querySelector(".info");
	let descrBtns = document.getElementsByClassName("description-btn");
	function hideTabContent(start) {
		for (let i = start; i < infoTabContents.length; ++i) {
			infoTabContents[i].classList.remove("show");
			infoTabContents[i].classList.add("hide");
		}
	};
	function showTabContent(toShow) {
		hideTabContent(0);
		infoTabContents[toShow].classList.remove("hide");
		infoTabContents[toShow].classList.remove("show");
	};
	hideTabContent(1);
	infoHeader.addEventListener("click", function(event){
		trg = event.target;
		if (trg.className === "info-header-tab") {
			for (let i = 0; i < infoTabs.length; ++i) {
				if (trg === infoTabs[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});
	infoBlock.addEventListener("click", function(event){
		let trg = event.target;
		if (trg.className === "description-btn") {
			trg.classList.add("more-splash");
			overlayWindow.style.display = "block";
			document.body.style.overflow = "hidden";
		}
	});

}

module.exports = tabs;
},{}],6:[function(require,module,exports){
function timer() {
	//Creating timer
	let deadline = "2018-04-06";
	function timeLeftTillDeadline(dLine) {
		let elapse = Date.parse(dLine) - Date.parse(new Date());
		let secondsLeft = Math.floor((elapse/1000) % 60);
		let minutesLeft = Math.floor( (elapse/(1000*60)) % 60);
		let hoursLeft = Math.floor( elapse/(1000*60*60) ) ;
		return {
			"total": elapse,
			"seconds": secondsLeft,
			"minutes": minutesLeft,
			"hours": hoursLeft
		};
	};
	function setClock(timerId, dLine) {
		let timer = document.getElementById(timerId);
		let secT = timer.querySelector(".seconds");
		let minT = timer.querySelector(".minutes");
		let hrsT = timer.querySelector(".hours");

		function updateClock() {
			let res = timeLeftTillDeadline(dLine);
			secT.innerHTML = res.seconds;
			minT.innerHTML = res.minutes;
			hrsT.innerHTML = res.hours;

			if (res.total <= 0) {
				clearInterval(timerInterval);
				secT.innerHTML = "00";
				minT.innerHTML = "00";
				hrsT.innerHTML = "00";
			}
		};

		let timerInterval = setInterval(updateClock, 1000);
	};
	setClock("timer", deadline);
}

module.exports = timer;
},{}]},{},[1]);
