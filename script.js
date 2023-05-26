/**
 * Selecting elements from DOM
 */
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");

    let images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg"];

    let prevImg = document.getElementById("prevImg");

    img1.onmouseover = function() {
        prevImg.setAttribute("src", images[0]);
    }
    img2.onmouseover = function() {
        prevImg.setAttribute("src", images[1]);
    }
    img3.onmouseover = function() {
        prevImg.setAttribute("src", images[2]);
    }
    img4.onmouseover = function() {
        prevImg.setAttribute("src", images[3]);
    }
    img5.onmouseover = function() {
        prevImg.setAttribute("src", images[4]);
    }

setInterval(() => {
    for(let image = 0; image <images.length; image++) {
        prevImg.setAttribute("src", images[image]);
    }
}, 5000);