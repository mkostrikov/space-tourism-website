import menu from "./menu.js";

const tabs = [...document.querySelectorAll(".js-tabs")];
if (tabs.length > 0) {
  import("./tabs.js").then((tabsModule) => {
    tabs.forEach((item) => tabsModule.default.init(item));
  });
}

menu({
  menu: document.querySelector(".js-menu"),
  button: document.querySelector(".js-menu-open"),
});
