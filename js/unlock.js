var getTest1 = document.querySelector(".locked.test1");
var getTest2 = document.querySelector(".locked.test2");
var getTest3 = document.querySelector(".locked.test3");
var getBalance = document.querySelector(".totaltokens p");

var totalTokens = 100;

getBalance.innerHTML = "<span>Balance:</span><br>" + totalTokens + " tokens";

function unlockTest1() {
    if (totalTokens >= 50) {
        this.classList.remove("locked");
        this.classList.add("unlocked");

        totalTokens -= 50;
        getBalance.innerHTML = "<span>Balance:</span><br>" + totalTokens + " tokens";
        
        setTimeout(
        function() {
            getTest1.href = "test1.html";
        }, 100);
        
        getTest1.removeEventListener("click", unlockTest1, false);
    }
    else {
        alert("Insufficient funds. Try to play other tests to gain more tokens.");
    }
}

function unlockTest2() {
    if (totalTokens >= 50) {
        this.classList.remove("locked");
        this.classList.add("unlocked");

        totalTokens -= 50;
        getBalance.innerHTML = "<span>Balance:</span><br>" + totalTokens + " tokens";
        
        setTimeout(
        function() {
            getTest2.href = "test2.html";
        }, 100);
        
        getTest2.removeEventListener("click", unlockTest2, false);
    }
    else {
        alert("Insufficient funds. Try to play other tests to gain more tokens.");
    }
}

function unlockTest3() {
    if (totalTokens >= 200) {
        this.classList.remove("locked");
        this.classList.add("unlocked");

        totalTokens -= 200;
        getBalance.innerHTML = "<span>Balance:</span><br>" + totalTokens + " tokens";
        
        setTimeout(
        function() {
            getTest3.href = "test3.html";
        }, 100);
        
        getTest3.removeEventListener("click", unlockTest3, false);
    }
    else {
        alert("Insufficient funds. Try to play other tests to gain more tokens.");
    }
}

getTest1.addEventListener("click", unlockTest1, false);
getTest2.addEventListener("click", unlockTest2, false);
getTest3.addEventListener("click", unlockTest3, false);