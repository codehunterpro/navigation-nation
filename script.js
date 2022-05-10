const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const allNav = document.querySelectorAll(".nav");
//toggle function
function toggleNav() {
  //active humbergur button animation
  menuBars.classList.toggle("change");
  //create boolean value to toggle classes in element
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // Show menu on display
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    // slide-in menu animation in
    allNav.forEach((nav, index) => {
      nav.classList.add(`slide-out-${index + 1}`);
      nav.classList.replace(`slide-out-${index + 1}`, `slide-in-${index + 1}`);
    });
  } else {
    // hide menu from display
    overlay.classList.replace(`overlay-slide-right`, "overlay-slide-left");
    //  slide-out menu animation out
    allNav.forEach((nav, index) => {
      nav.classList.replace(`slide-in-${index + 1}`, `slide-out-${index + 1}`);
    });
  }
}
//Event Listener for humburger button
menuBars.addEventListener("click", toggleNav);
//Event Listener for menu-button
allNav.forEach((nav) => nav.addEventListener("click", toggleNav));
