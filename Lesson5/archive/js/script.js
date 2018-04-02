let menu = document.querySelector(".menu");
let menuItems = document.getElementsByClassName("menu-item");

//Creating an element to add
let toAdd = document.createElement('li');
toAdd.classList.add("menu-item");
toAdd.textContent = "Пятый пункт";

//Adding an element and sorting menu items
menu.appendChild(toAdd);
let thirdMenuItem = menuItems[1];
let secondMenuItem = menuItems[2]
menu.replaceChild(thirdMenuItem, secondMenuItem);
menu.insertBefore(secondMenuItem, thirdMenuItem);


//Changing bg
document.querySelector("body").style.backgroundImage = 'url(img/apple_true.jpg)';

//Changing the title
document.getElementById("title").textContent = "Мы продаем только подлинную технику Apple";

//Removing an adv
document.querySelector(".adv").remove();

//Question
let answer = prompt("Нравится ли Вам техника Apple?", "");
document.getElementById("prompt").textContent = answer;