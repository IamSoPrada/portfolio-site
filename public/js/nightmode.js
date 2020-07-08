const nightMode = document.querySelector(".fa-moon");
const body = document.querySelector("#body");
const reactGlow = document.querySelector(".fa-react");
const htmlGlow = document.querySelector(".fa-html5");
const cssGlow = document.querySelector(".fa-css3-alt");
const jsGlow = document.querySelector(".fa-js");
const pythonGlow = document.querySelector(".fa-python");
const title = document.querySelector(".promo-title");

nightMode.addEventListener("click", function () {
    body.classList.toggle("night-mode");
    reactGlow.classList.toggle("night-mode-react");
    htmlGlow.classList.toggle("night-mode-html5");
    cssGlow.classList.toggle("night-mode-css");
    jsGlow.classList.toggle("night-mode-js");
    pythonGlow.classList.toggle("night-mode-python");
    title.classList.toggle("night-title");
})
