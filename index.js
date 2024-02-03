gsap.registerPlugin(ScrollTrigger);
let heading = document.querySelector("h1");
gsap.to("#main", {
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    end: "bottom -400",
    pin: "#main",
    scrub: true,
    // markers: true,
  },
  // skewX: 5,
  transform: "rotate(-20deg)",
  opacity: 0.5,
  duration: 10,
});
gsap.to("h1", {
  scrollTrigger: {
    markers: true,
    start: "70% 99%",
    end: "center 10%",
    scrub: 1,
    onEnter: () => {
      gsap.to("h1", {
        opacity: 1,
      });
    },
    onLeave: () => {
      gsap.to("h1", {
        opacity: 0,
      });
    },
  },
});
gsap.to("#row1", {
  marginTop: -120,
  scrollTrigger: {
    // markers: true,
    scrub: 1,
  },
});
gsap.to("img", {
  height: "280px",
  scrollTrigger: {
    // markers: true,
    scrub: 1,
  },
});

gsap.to("#row2", {
  marginTop: -120,
  scrollTrigger: {
    // markers: true,
    scrub: 1,
  },
});
gsap.to("#row3", {
  marginTop: -120,
  scrollTrigger: {
    // markers: true,
    scrub: 1,
  },
});
gsap.to("#row4", {
  marginTop: -120,
  scrollTrigger: {
    // markers: true,
    scrub: 1,
  },
});
gsap.to("#row5", {
  marginTop: -120,
  scrollTrigger: {
    // markers: true,
    scrub: 1,
  },
});
