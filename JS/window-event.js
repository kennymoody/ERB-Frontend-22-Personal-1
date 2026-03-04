window.addEventListener("load", () => console.log("page loaded"));

window.addEventListener("DOMContentLoaded", () => console.log("DOM loaded"));

window.addEventListener("resize", () => {
  console.log("window resized");
  document.querySelector("h1").innerText =
    `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

window.addEventListener("scroll", () =>
  console.log(`window scrolled ${window.scrollX} x ${window.scrollY}`),
);

const p = document.querySelector("p");
p.addEventListener("click", () => console.log("paragraph clicked"));
