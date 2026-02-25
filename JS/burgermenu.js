// Wait for the DOM to be fully loaded before running the JavaScript code
document.addEventListener("DOMContentLoaded", () => {
  // Get the toggle button element
  const togglebutton = document.querySelector(".mobile-menu-toggle");
  
  // Get the mobile menu items element
  const mobilemenu = document.querySelector(".mobile-menu-items");

  // Add an event listener to the toggle button
  // When the button is clicked, toggle the "active" class on the mobile menu items element
  togglebutton.addEventListener("click", () => {
    mobilemenu.classList.toggle("active");
  });
});