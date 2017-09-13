// funkcje do html

function functionalities() {
    subMenuDisplay();
    textHide();
    slider();
    calculateProduct();
}

// zadanie 01 - wysuwanie podmenu

function subMenuDisplay() {
    var mainMenu = document.querySelectorAll(".main-menu>li");

    function showMenu(event) {
        var subMenu = this.children;
        for (var i = 0; i < subMenu.length; i++) {
            subMenu[i].style.display = "block";
        };
    };

    function hideMenu(event) {
        var subMenu = this.children;
        for (var i = 1; i < subMenu.length; i++) {
            subMenu[i].style.display = "none";
        };
    };

    for (var i = 0; i < mainMenu.length; i++) {
        mainMenu[i].addEventListener("mouseover", showMenu);
        mainMenu[i].addEventListener("mouseout", hideMenu);
    };
};

// ==============================================================
// zadanie 2 - chowanie opisu
function textHide() {
    var Product01 = document.querySelector(".photo.product01");
    var Product02 = document.querySelector(".photo.product02");
    var textToHide01 = document.querySelectorAll(".photo-headline.product01");
    var textToHide02 = document.querySelectorAll(".photo-headline.product02");


    function hide(event) {
        this.querySelector("div").style.display = "none";
    };

    function show(event) {
        this.querySelector("div").style.display = "block";
    };

    Product01.addEventListener("mouseover", hide);
    Product02.addEventListener("mouseover", hide);
    Product01.addEventListener("mouseout", show);
    Product02.addEventListener("mouseout", show);
};

//=============================================================
// zadanie 3 - slider
function slider() {
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
};

// ===============================================================
//zadanie 4 - kalkulator
function calculateProduct() {
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
    var transportInput = document.querySelector(".transport-checkbox")
    var detailPrices = document.querySelectorAll(".order-details-prices li");
    var totalSum = document.querySelector(".order-total-sum");
    totalSum.innerText = 0 + " pln";
    var sum = 0;
    var price = 0;

    // // funkcje   ==================================================
    function order(selectedItem) {
        var data = selectedItem.options[selectedItem.selectedIndex].dataset;
        price = parseInt(data.price);
    };

    function totalSumCalc() {
        sum = 0;
        for (var i = 0; i < detailPrices.length; i++) {
            if (!detailPrices[i].innerText) {
                detailPrices[i].innerText = 0;
            };

            sum = sum + parseInt(detailPrices[i].innerText);
            console.log(sum);
        }
        totalSum.innerText = sum + " pln";
    };

    // ==========
    items.addEventListener("change", function() {
        order(this);
        orderItem.innerText = this.value;
        itemPrice.innerText = price;
        totalSumCalc();
    });

    colors.addEventListener("change", function() {
        order(this);
        orderColor.innerText = this.value;
        colorPrice.innerText = price;
        totalSumCalc();
    });

    material.addEventListener("change", function() {
        order(this);
        orderMaterial.innerText = this.value;
        materialPrice.innerText = price;
        totalSumCalc();
    });

    transportCheckbox.addEventListener("click", function() {
        if (!transportInput.checked) {
            var transport = document.querySelector(".transport");
            orderTransport.innerText = transport.innerText;
            var price = parseInt(this.dataset.price);
            transportPrice.innerText = price;
            totalSumCalc();
        } else {
            console.log("test");
            sum = sum - 50;
            totalSum.innerText = sum + " pln";
            transportPrice.innerText = 0;
        }
        // totalSumCalc();
    });
};