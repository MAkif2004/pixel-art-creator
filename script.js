//Initial reference

let container = document.querySelector(".container");
let gridButton = document.getElementById("submit-grid");
let clearGridButton = document.getElementById("clear-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");
let widthValue = document.getElementById("width-value");
let heightValues = document.getElementById("height-value");


//events object

let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup"
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend"
    }
}

let deviceType = "";

//Initially draw and erase would be false trust me on this

let draw = false;
let erase = false;

//Detect touch device
const isTouchDevice = () => {
    try {
        //We try to create TouchEvent(it would fail for desktops and throw errors)
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    }
    catch(e) {
        deviceType = "mouse";
        return false;
    }
};

console.log(isTouchDevice());