// const iconDown = document.querySelectorAll(".icon-arrow-down");
const open = document.querySelectorAll(".open");
const menu = document.querySelector("aside");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileClose = document.querySelector(".mobile-close");
const overlay = document.querySelector(".overlay");

////////////////////////////////////////////////////
//  Opening and closing menus with arrow-down icon
////////////////////////////////////////////////////

open.forEach((i) => {
  i.addEventListener("click", () => {
    const goal = i.nextElementSibling;
    if (goal.classList.contains("hidden")) {
      i.firstElementChild.setAttribute("name", "arrow-dropup");
      goal.classList.remove("hidden");
    } else {
      i.firstElementChild.setAttribute("name", "arrow-dropdown");
      goal.classList.add("hidden");
    }
  });
});

///////////////////////////////
// responsive menu for max-width: 65rem
///////////////////////////////

mobileMenu.addEventListener("click", () => {
  menu.style.display = "block";
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

mobileClose.addEventListener("click", () => {
  menu.style.display = "none";
  overlay.classList.add("hidden");
  document.body.style.overflow = "scroll";
});

// The dark cover that is placed behind it when the menu is opened

overlay.addEventListener("click", () => {
  menu.style.display = "none";
  overlay.classList.add("hidden");
  document.body.style.overflow = "scroll";
});

/////////////////////////////////////////
//  Remove mobile menu for width > 65rem
/////////////////////////////////////////

window.addEventListener("resize", () => {
  const width = window.innerWidth;

  if (width > 1040) {
    menu.style.display = "block";
    overlay.classList.add("hidden");
  } else {
    menu.style.display = "none";
  }

  if (menu.style.display === "none") {
    overlay.classList.add("hidden");
  }
});
