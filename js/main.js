let loadingCircle = document.querySelector(".loading-circle");
let loadingText = document.querySelector(".text");
let scrollDown = document.querySelector(".scroll");
let toogle = document.querySelector(".menu");
let social = document.querySelector(".social-links");
let useful = document.querySelector(".useful-links");

toogle.onclick = function () {
    social.classList.toggle("show")
    useful.classList.toggle("show")
}
setTimeout(function () {
    loadingCircle.style.opacity = "0"
},7500);
setTimeout(function () {
    loadingCircle.style.display = "none"
},7500);
setTimeout(function () {
    loadingText.style.display ="block"
},1500);
setTimeout(function () {
    scrollDown.style.display = "block"
    document.body.style.overflowY = "visible"
},10000)


