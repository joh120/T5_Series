
// Global Variables

// Button Varibles
const shoe1Btn1 = document.querySelector("#btn1");
const shoe1Btn2 = document.querySelector("#btn2");

const shoe2Btn3 = document.querySelector("#btn3");
const shoe2Btn4 = document.querySelector("#btn4");

const shoe3Btn5 = document.querySelector("#btn5");
const shoe3Btn6 = document.querySelector("#btn6");

const shoe4Btn7 = document.querySelector("#btn7");
const shoe4Btn8 = document.querySelector("#btn8");

const shoe5Btn9 = document.querySelector("#btn9");
const shoe5Btn10 = document.querySelector("#btn10");


// Card 1 
const colorway1 = document.querySelector(".colorway1");
const productDesc1 = document.querySelector(".productDesc1");

// Card 2 

const colorway2 = document.querySelector(".colorway2");
const productDesc2 = document.querySelector(".productDesc2");

// Card 3

const colorway3 = document.querySelector(".colorway3");
const productDesc3 = document.querySelector(".productDesc3");

// Card 4 

const colorway4 = document.querySelector(".colorway4");
const productDesc4 = document.querySelector(".productDesc4");

// Card 5

const colorway5 = document.querySelector(".colorway5");
const productDesc5 = document.querySelector(".productDesc5");



// Card 1 Shoe 1

shoe1Btn1.addEventListener("click", () => {
    colorway1.style.display = "block";
    productDesc1.style.display = "block";
})

shoe1Btn2.addEventListener("click", () => {
    colorway1.style.display = "none";
    productDesc1.style.display = "none";
})

// Card 2 Shoe 2

shoe2Btn3.addEventListener("click", () => {
    colorway2.style.display = "block";
    productDesc2.style.display = "block";
})

shoe2Btn4.addEventListener("click", () => {
    colorway2.style.display = "none";
    productDesc2.style.display = "none";
})


// Card 3 Shoe 3

shoe3Btn5.addEventListener("click", () => {
    colorway3.style.display = "block";
    productDesc3.style.display = "block";
})

shoe3Btn6.addEventListener("click", () => {
    colorway3.style.display = "none";
    productDesc3.style.display = "none";
})

// Card 4 Shoe 4

shoe4Btn7.addEventListener("click", () => {
    colorway4.style.display = "block";
    productDesc4.style.display = "block";
})

shoe4Btn8.addEventListener("click", () => {
    colorway4.style.display = "none";
    productDesc4.style.display = "none";
})


// Card 5 Shoe 5

shoe5Btn9.addEventListener("click", () => {
    colorway5.style.display = "block";
    productDesc5.style.display = "block";
})

shoe5Btn10.addEventListener("click", () => {
    colorway5.style.display = "none";
    productDesc5.style.display = "none";
})