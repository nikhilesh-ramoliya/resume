// typing animation

var typed = new Typed(".typing", {
    strings: ["", "Web Developer.", "Web Designer.", "Web organizer."],
    typeSpeed: 100,
    backSpeed: 60,
    loopCount: Infinity
});

//
const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', () => {
    document.querySelector(".aside").classList.toggle('open-nav');
});




document.querySelectorAll(".section").forEach(section => {
    section.addEventListener("click", () => {
        document.querySelector(".aside").classList.remove("open-nav");
    });
});


