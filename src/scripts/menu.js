export default function ({ button, menu }) {
  button.addEventListener("click", () => {
    menu.showModal();
    menu
      .querySelector(".js-menu-close")
      .addEventListener("click", () => menu.close(), { once: true });
  });
}
