window.addEventListener("DOMContentLoaded", function(){

	let infoTabs = document.getElementsByClassName("info-header-tab");
	let infoTabContents = document.getElementsByClassName("info-tabcontent");
	let infoHeader =  document.querySelector(".info-header");

	function hideTabContent(start) {
		for (let i = start; i < infoTabContents.length; ++i) {
			infoTabContents[i].classList.remove("show");
			infoTabContents[i].classList.add("hide");
		}
	}

	function showTabContent(toShow) {
		hideTabContent(0);
		infoTabContents[toShow].classList.remove("hide");
		infoTabContents[toShow].classList.remove("show");
	}

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

});