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