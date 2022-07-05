const tl = new TimelineMax();
tl.from(".home .container .home-info h3", 1, {
  opacity: 0,
  y: -100,
  ease: "power3.out",
  delay: 0,
});
tl.from(".home .container .home-info p", 1, {
  opacity: 0,
  x: -100,
  ease: "power3.out",
  delay: 0,
});
tl.from(
  ".home .container .home-info .btn",
  1,
  {
    opacity: 0,
    ease: "power3.out",
    delay: 0,
  },
  0
);
tl.timeScale(2);
tl.delay(0.5);

gsap.from(".about .education", {
  scrollTrigger: {
    trigger: ".about .education",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
  opacity: 0,
});
gsap.from(".about .experience", {
  scrollTrigger: {
    trigger: ".about .experience",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
  opacity: 0,
});

gsap.from(".about .skills", {
  scrollTrigger: {
    trigger: ".about .skills",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
  opacity: 0,
  y: 100,
});
gsap.from(".about .personal-info", {
  scrollTrigger: {
    trigger: ".about .personal-info",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
  opacity: 0,
  y: 100,
});

var contactinfoItem = document.querySelectorAll(".service-item");
contactinfoItem.forEach((item) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      end: "bottom center",
      scrub: true,
    },
    opacity: 0,
    y: 100,
  });
});
var contactinfoItem = document.querySelectorAll(".portfolio-item");
contactinfoItem.forEach((item) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      end: "bottom center",
      scrub: true,
    },
    opacity: 0,
    y: 100,
  });
});
var contactinfoItem = document.querySelectorAll(".contact-info-item");
contactinfoItem.forEach((item) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      end: "bottom center",
      scrub: true,
    },
    opacity: 0,
    y: 100,
  });
});

var navli = document.querySelectorAll(".nav li");
navli.forEach((item) => {
  item.addEventListener("mouseover", () => {
    gsap.to(item, {
      duration: 0.5,
      opacity: 1,
      ease: "power3.out",
      scale: 1.2
    });
  })
  item.addEventListener("mouseout", () => {
    gsap.to(item, {
      duration: 0.5,
      opacity: 0.5,
      ease: "power3.out",
      scale: 1,
    });
  })

});


var portfolioItem = document.querySelectorAll(".portfolio-item");
portfolioItem.forEach((item) => {
  item.addEventListener("mouseover", () => {
    gsap.to(item, {
      duration: 0.5,
      opacity: 1,
      ease: "power3.out",
      scale: 1.1
    });
  })
  item.addEventListener("mouseout", () => {
    gsap.to(item, {
      duration: 0.5,
      opacity: 0.7,
      ease: "power3.out",
      scale: 1,
    });
  })

});