class Creator {

	constructor(height = "100px", width = "100px", bg = "purple", fontSize = "15px", textAlign = "center") {
		
		this.height = height;
		this.width = width;
		this.bgColor = bg;
		this.fontSize = fontSize;
		this.tAlign = textAlign;
	}

	createDiv(text="Your text to fill") {
		let newDiv= document.createElement("div");
		newDiv.textContent = text;
		console.log(this);

		/* Хотела сделать прям по заданию, через cssText
			но видимо такой фокус не работает :(((
		newDiv.style.cssText = "margin: 10px; \
			background-color: this.bgColor; \
			text-align: this.tAlign; \
			width: this.width; \
			height: this.height; \
			font-size: this.fontSize; \
			text-align: this.tAlign; \
		";*/
		
		newDiv.style.backgroundColor = this.bgColor;
		newDiv.style.padding = "10px";
		newDiv.style.textAlign = this.tAlign;
		newDiv.style.width = this.width;
		newDiv.style.height = this.height;
		newDiv.style.fontSize = this.fontSize;

		return newDiv;
	}
}

let check = new Creator();
let myDiv = check.createDiv();
document.body.appendChild(myDiv);