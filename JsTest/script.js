let roll = document.querySelector("#roll");
roll.addEventListener("click", guess);

let diceText1 = document.querySelector("#text1");
let diceText2 = document.querySelector("#text2");
let diceText3 = document.querySelector("#text3");
let diceText4 = document.querySelector("#text4");
let diceText5 = document.querySelector("#text5");

let one = true;
let two = true;
let three = true;
let four = true;
let five = true;

let keep1 = document.querySelector("#keep1")
keep1.addEventListener("click", () => {
    one = false;
    document.querySelector("#text1").style.backgroundColor = "green";
});

let keep2 = document.querySelector("#keep2")
keep2.addEventListener("click", () => {
    two = false;
    document.querySelector("#text2").style.backgroundColor = "green";
});

let keep3 = document.querySelector("#keep3")
keep3.addEventListener("click", () => {
    three = false;
    document.querySelector("#text3").style.backgroundColor = "green";
});

let keep4 = document.querySelector("#keep4")
keep4.addEventListener("click", () => {
    four = false;
    document.querySelector("#text4").style.backgroundColor = "green";
});

let keep5 = document.querySelector("#keep5")
keep5.addEventListener("click", () => {
    five = false;
    document.querySelector("#text5").style.backgroundColor = "green";
});




function guess() {
    if (one === true) {
        let dice1 = Math.floor(Math.random() * 6) + 1;
        diceText1.textContent = dice1;
    }if (two === true) {
        let dice2 = Math.floor(Math.random() * 6) + 1;
        diceText2.textContent = dice2;
    }if (three === true) {
        let dice3 = Math.floor(Math.random() * 6) + 1;
        diceText3.textContent = dice3;
    }if (four === true) {
        let dice4 = Math.floor(Math.random() * 6) + 1;
        diceText4.textContent = dice4;
    }if (five === true) {
        let dice5 = Math.floor(Math.random() * 6) + 1;
        diceText5.textContent = dice5;
    }
}
