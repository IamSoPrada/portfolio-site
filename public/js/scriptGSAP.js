gsap.registerPlugin(ScrollToPlugin);

const projectSection = document.querySelector("#projects");
const about = document.querySelector("#about");
const btn = document.querySelector(".contact-btn");

projectSection.addEventListener("click", function (e) {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: ".main-projects" });
})

about.addEventListener("click", function (e) {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: ".main-about" });
})

gsap.from(".fab", {
    duration: 2,
    scale: 0.3,
    opacity: 0,
    delay: 0.5,
    stagger: 0.2,
    ease: "elastic",
    force3D: true
});

gsap.fromTo(".promo-title", { x: 0, y: -1000, opacity: 0.2 }, { x: 0, y: 0, opacity: 1, duration: 2, ease: "power1" });

document.querySelectorAll(".fab").forEach(function (fab) {
    fab.addEventListener("click", function () {
        gsap.to(".fab", {
            duration: 0.5,
            opacity: 0,
            y: -100,
            stagger: 0.1,
            ease: "back.in"
        });
    });
});