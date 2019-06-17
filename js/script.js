//var getUnlocked = document.querySelectorAll(".unlocked");
//var getLocked = document.querySelectorAll(".locked");

var getIntro = document.querySelector(".intro");
var getTest1 = document.querySelector(".test1");
var getTest2 = document.querySelector(".test2");

var getButtonIntro = document.querySelector(".button-intro");
var getButtonTest1 = document.querySelector(".button-test1");
var getButtonTest2 = document.querySelector(".button-test2");

function runTest1() {
    getIntro.classList.remove("active");
    getIntro.classList.add("inactive");
    
    getTest1.classList.remove("inactive");
    getTest1.classList.add("active");
}

function runTest2() {
    getTest1.classList.remove("active");
    getTest1.classList.add("inactive");
    
    getTest2.classList.remove("inactive");
    getTest2.classList.add("active");
}

getButtonIntro.addEventListener("click", runTest1, false);
getButtonTest1.addEventListener("click", runTest2, false);