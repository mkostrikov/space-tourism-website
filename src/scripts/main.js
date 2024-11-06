import tabs from "./tabs.js";

[...document.querySelectorAll(".js-tabs")].forEach((el) => {
  if (el) {
    tabs.init(el);
  }
});
