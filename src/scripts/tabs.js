let prevActiveSlide = -1;
let activeSlide = -1;

function show(n, slides, navs) {
  if (n === -1) return;
  slides[n].dataset.active = "true";
  navs[n].dataset.active = "true";
}

function hide(n, slides, navs) {
  if (n === -1) return;
  slides[n].dataset.active = "false";
  navs[n].dataset.active = "false";
}

function toggle(n, slides, navs) {
  if (n === activeSlide) return;

  prevActiveSlide = activeSlide;
  activeSlide = n;
  hide(prevActiveSlide, slides, navs);
  show(activeSlide, slides, navs);
}

function init(rootElement) {
  const navs = [...rootElement.querySelectorAll(".js-tabs-nav")];
  const slides = [...rootElement.querySelectorAll(".js-tabs-card")];

  toggle(0, slides, navs);

  navs.forEach((nav, index) =>
    nav.addEventListener("click", () => toggle(index, slides, navs)),
  );
}

export default { init };
