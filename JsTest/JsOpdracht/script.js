let button = document.querySelector("#button");
button.addEventListener("click", waardes);

let textElement = document.querySelector("#text");

function waardes() {
    let array = [];
    for (var i = 0; i < 5; i++) {
        array.push(Math.floor(Math.random() * 6) + 1);
    }
    console.log(array);
    for (var i = 0; i < array.length; i++) {
        textElement.textContent += " " + array[i];
    }

}