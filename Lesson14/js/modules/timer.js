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