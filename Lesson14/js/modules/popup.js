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