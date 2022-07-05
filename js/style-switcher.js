// ===================  toggle style switcher  ==========================================
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', () => {
    const styleSwitcher = document.querySelector('.style-switcher');
    styleSwitcher.classList.toggle('open');
}
);

// ===================  hide style switcher onscroll ==========================================
window.addEventListener("scroll", () => {
    const styleSwitcher = document.querySelector('.style-switcher');
    if (styleSwitcher.classList.contains('open')) {
        styleSwitcher.classList.remove('open');
    }
});
document.querySelectorAll(".section").forEach(section => {
    section.addEventListener("click", () => {
        const styleSwitcher = document.querySelector('.style-switcher');
        if (styleSwitcher.classList.contains('open')) {
            styleSwitcher.classList.remove('open');
        }
    });
}
);








// ===================  theme colors  ==========================================
const colors = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    colors.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    })
}


// ================================ the light and dark  ==========================================
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});
window.addEventListener("load", ()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})


