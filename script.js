//  Buttons
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");

// Button Divs
let btnDiv1 = document.querySelector("#btnDiv1");
let btnDiv2 = document.querySelector("#btnDiv2");
let btnDiv3 = document.querySelector("#btnDiv3");
let btnDiv4 = document.querySelector("#btnDiv4");

let box = document.querySelector(".box");

let selectedDiv = document.querySelector(".selected");

btn1.addEventListener("click", () => {
    box.innerHTML = "<p>This is the Content for the First Box</p>";
    selectedDiv.classList.remove("selected");
    btnDiv1.classList.remove("notSelected");
    btnDiv1.classList.add("selected");
    selectedDiv.classList.add("notSelected");
    selectedDiv = btnDiv1;
})
btn2.addEventListener("click", () => {
    box.innerHTML = "<p>This is the Content for the Second Box</p>";
    selectedDiv.classList.remove("selected");
    btnDiv2.classList.remove("notSelected");
    btnDiv2.classList.add("selected");
    selectedDiv.classList.add("notSelected");
    selectedDiv = btnDiv2;
})
btn3.addEventListener("click", () => {
    box.innerHTML = "<p>This is the Content for the Third Box</p>";
    selectedDiv.classList.remove("selected");
    btnDiv3.classList.remove("notSelected");
    btnDiv3.classList.add("selected");
    selectedDiv.classList.add("notSelected");
    selectedDiv = btnDiv3;
})
btn4.addEventListener("click", () => {
    box.innerHTML = "<p>This is the Content for the Fourth Box</p>";
    selectedDiv.classList.remove("selected");
    btnDiv4.classList.remove("notSelected");
    btnDiv4.classList.add("selected");
    selectedDiv.classList.add("notSelected");
    selectedDiv = btnDiv4;
})
