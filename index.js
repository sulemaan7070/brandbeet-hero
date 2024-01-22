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
    duration: 0.5,
  },
  skewX: 5,
  rotateX: 20,
  opacity: 0.5,
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
  marginTop: -100,
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
  marginTop: -100,
  scrollTrigger: {
    // markers: true,
    scrub: 1,
  },
});
gsap.to("#row3", {
  marginTop: -100,
  scrollTrigger: {
    // markers: true,
    scrub: 1,
  },
});
gsap.to("#row4", {
  marginTop: -100,
  scrollTrigger: {
    // markers: true,
    scrub: 1,
  },
});
gsap.to("#row5", {
  marginTop: -100,
  scrollTrigger: {
    // markers: true,
    scrub: 1,
  },
});
