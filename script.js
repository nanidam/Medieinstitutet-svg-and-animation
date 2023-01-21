const paths = document.querySelectorAll("path");
const tl = gsap.timeline();
const firstLetter = document.querySelectorAll(".first-letter"); // select the first letter element

// shift the color of the text from left to right
const animatePaths = (path) => {
  tl.to(path, { duration: 0.4, fill: "#ffd700", ease: "Power3.easeOut" });
};

//change color on first-letter
gsap.to(".first-letter", {
  duration: 1,
  fill: "orange",
  yoyo: true,
  repeat: 1.5,
});

//minimize letter
gsap.to(".letter-p1, .letter-n1, .letter-w", {
  scale: 0.5,
  transformOrigin: "center center",
  duration: 1,
  repeat: 1.5,
  yoyo: true,
  fill: "white",
});

//bouncing letter
gsap.to(".letter-e2, .letter-p2, .letter-r1", {
  duration: 0.5,
  y: -10,
  repeat: 3.5,
  yoyo: true,
  ease: "sine.inOut",
  fill: "green",
});

//rotating letter
gsap.to(".letter-a2", {
  rotation: 360,
  duration: 1.5,
  transformOrigin: "center center",
  yoyo: true,
  repeat: 1,
  fill: "blue",
});

//expand letter and change color
gsap.to(" .letter-e1, .letter-a3", {
  fill: "purple",
  scale: 1.5,
  duration: 1.5,
  repeat: 1.5,
  yoyo: true,
});

//make a wave from left to right
tl.to(paths, {
  delay: 3,
  duration: 0.5,
  rotation: 360,
  yoyo: true,
  repeat: 1,
  stagger: 0.1,
  fill: "#ffd700",
});

//fade out going left
//fade in going right
tl.to(paths, {
  duration: 1,
  x: -500,
  opacity: 0,
  stagger: 0.1,
  delay: 0.4,
}).to(paths, {
  duration: 0.5,
  x: 0,
  opacity: 1,
  stagger: 0.1,
  fill: "#bd0000",
});

paths.forEach(animatePaths);

// make specifik letters change opacity from 0-100
tl.to(".letter-l, .letter-u, .letter-n1, .letter-a2, .letter-r1", {
  duration: 1,
  yoyo: true,
  repeat: -1,
  fill: "#66150E",
});
