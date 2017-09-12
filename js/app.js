// zadanie 01 - wysuwanie podmenu

// var mainMenu = document.querySelectorAll(".main-menu>li");

// console.log(mainMenu);

// for (var i = 0; i < mainMenu.length; i++) {
//     mainMenu[i].addEventListener("mouseover", show);
//     mainMenu[i].addEventListener("mouseout", hide);
// }

// function show(event) {
//     var subMenu = this.children;
//     for (var i = 0; i < subMenu.length; i++) {
//         if (subMenu[i].getAttribute("class") == "sub-menu") {
//             subMenu[i].classList.add("visible");
//         }
//         // console.log(subMenu[i]);
//         // console.log(typeof subMenu[i]);
//     }
// }

// function hide(event) {
//     var subMenu = this.children;
//     if (subMenu[i].getAttribute("class") == "sub-menu visible") {
//         subMenu[i].classList.remove("visible");
//     }
// }


///////////////////////////////////////////////////////
// zadanie 2 - chowanie opisu
var Product01 = document.querySelector(".photo.product01");
var Product02 = document.querySelector(".photo.product02");
var textToHide01 = document.querySelectorAll(".photo-headline.product01");
var textToHide02 = document.querySelectorAll(".photo-headline.product02");


Product01.addEventListener("mouseover", hide);
Product02.addEventListener("mouseover", hide);
Product01.addEventListener("mouseout", show);
Product02.addEventListener("mouseout", show);

function hide(event) {
    this.querySelector("div").style.display = "none";
};

function show(event) {
    this.querySelector("div").style.display = "block";
};

///////////////////////////////////////////////////
//zadanie 3 - slider
var next = document.querySelector(".slider-prev");
var prev = document.querySelector(".slider-next");
var imagesList = document.querySelectorAll(".slide-photo");
var counter = 0;

for (var i = 0; i < imagesList.length; i++) {
    imagesList[i].classList.add("invisible");
}

imagesList[counter].classList.add("visible");

next.addEventListener("click", function() {
    imagesList[counter].classList.remove("visible");
    counter++;
    if (counter >= imagesList.length) {
        counter = 0;
    };
    imagesList[counter].classList.add("visible");
});

prev.addEventListener("click", function() {
    imagesList[counter].classList.remove("visible");
    counter--;
    if (counter < 0) {
        counter = imagesList.length - 1
    };
    imagesList[counter].classList.add("visible");
});
///////////////////////////////////////////////////////////
//zadanie 4 - kalkulator

var items = document.querySelector(".items");
var colors = document.querySelector(".colors");
var material = document.querySelector(".material");
var orderItem = document.querySelector(".order-item");
var orderColor = document.querySelector(".order-color");
var orderMaterial = document.querySelector(".order-material");
var orderTransport = document.querySelector(".order-transport")
var itemPrice = document.querySelector(".order-item-price");
var colorPrice = document.querySelector(".order-color-price");
var materialPrice = document.querySelector(".order-material-price");
var transportCheckbox = document.querySelector(".img-checked");
var transportPrice = document.querySelector(".order-transport-price");
var totalSum = document.querySelector(".order-total-sum");
var sum = 0;

console.log(transportCheckbox);
//pobieram wartości z select

items.addEventListener("change", function() {
    orderItem.innerText = items.value;
     var  data= items.options[items.selectedIndex].dataset;
     var  price= parseInt(data.price);
     itemPrice.innerText = price + " pln";
     sum = sum + price;
     totalSum.innerText = sum + " pln";
});

colors.addEventListener("change", function() {
    orderColor.innerText = colors.value;
    var  data= colors.options[colors.selectedIndex].dataset;
    var  price= parseInt(data.price);
    colorPrice.innerText = price + " pln";
    sum = sum + price;
    totalSum.innerText = sum + " pln";
});

material.addEventListener("change", function() {
    orderMaterial.innerText = material.value;
    var  data= material.options[material.selectedIndex].dataset;
    var  price= parseInt(data.price);
    materialPrice.innerText = price + " pln";
    sum = sum + price;
    totalSum.innerText = sum + " pln";
});

transportCheckbox.addEventListener("click", function() {
    var transport = document.querySelector(".transport");
    orderTransport.innerText = transport.innerText;
    var price = parseInt(transportCheckbox.dataset.price);
    transportPrice.innerText = price;
    sum = sum + price;
    totalSum.innerText = sum + " pln";
});
