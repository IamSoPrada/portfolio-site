gsap.from(".fab", {
    duration: 2,
    scale: 0.3,
    opacity: 0,
    delay: 0.5,
    stagger: 0.2,
    ease: "elastic",
    force3D: true
});

gsap.fromTo(".promo-title", {x: 0, y: -1000, opacity: 0.2 }, {x: 0, y: 0,opacity: 1, duration: 2, ease: "power1"});

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