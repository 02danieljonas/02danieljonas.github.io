const HTMLText = document.getElementById("HTMLText");

const HTMLTextValues = [
    "a computer science student",
    "that guy",
    "Daniel Jonas",
];

const speed = 100;

let valuePos = 0;
let txt = HTMLTextValues[valuePos];

function changeValue() {
    if (HTMLText.innerHTML.length < txt.length) {
        HTMLText.innerHTML += txt.charAt(HTMLText.innerHTML.length);
        setTimeout(changeValue, speed);
    } else {
        setTimeout(deleteValue, speed * 6);
    }
}

function deleteValue() {
    if (HTMLText.innerHTML.length != 0) {
        HTMLText.innerHTML = HTMLText.innerHTML.slice(0, -1);
        setTimeout(deleteValue, speed);
    } else {
        changeText();
        setTimeout(changeValue, speed * 6);
    }
}

function changeText() {
    valuePos < HTMLTextValues.length - 1 ? valuePos++ : (valuePos = 0);
    // if (valuePos < HTMLTextValues.length - 1) {
    //     valuePos++;
    // } else {
    //     valuePos = 0;
    // }
    txt = HTMLTextValues[valuePos];
}

changeValue();