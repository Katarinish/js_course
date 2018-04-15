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