document.addEventListener("DOMContentLoaded", () => {
  const togglebutton = document.querySelector(".mobile-menu-toggle");
  const mobilemenu = document.querySelector(".mobile-menu-items");

  togglebutton.addEventListener("click", () => {
    mobilemenu.classList.toggle("active");
  });
});
