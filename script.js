// const iconDown = document.querySelectorAll(".icon-arrow-down");
const open = document.querySelectorAll(".open");
const menu = document.querySelector("aside");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileClose = document.querySelector(".mobile-close");
const overlay = document.querySelector(".overlay");
// const tabs = document.querySelectorAll(".activators__tab");
// const tabsContainer = document.querySelector(".activators__tab-container");
// const tabsContent = document.querySelectorAll(".activators__content");

// const popover = document.querySelectorAll(".popover");
// const buttomSpace = document.querySelector(".buttom-space");
// const tabs = document.querySelectorAll(".activator__tab");
// const tabsContainer = document.querySelector(".activator__tab-container");
// const tabsContent = document.querySelectorAll(".activator__content");

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

    // buttomSpace.addEventListener("click", () => {
    //   i.firstElementChild.setAttribute("name", "arrow-dropdown");
    //   goal.classList.add("hidden");
    // });
  });
});

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

overlay.addEventListener("click", () => {
  menu.style.display = "none";
  overlay.classList.add("hidden");
  document.body.style.overflow = "scroll";
});

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

// tabsContainer.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".activators__tab");

//   // Guard Clause
//   if (!clicked) return;

//   // // Remove Active Classes
//   // tabs.forEach((t) => t.classList.remove("activators__tab--active"));
//   tabsContent.forEach((c) => c.classList.remove("activators__content--active"));

//   // Active Tab

//   // clicked.classList.add("activators__tab--active");

//   // Activate Content Area

//   document
//     .querySelector(`.activators__content--${clicked.dataset.tab}`)
//     .classList.add("activators__content--active");
// });
