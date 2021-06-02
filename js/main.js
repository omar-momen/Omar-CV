/*********** Start Cursor Control ***********/
const cursor = document.querySelector(".cursor");
const clickableItems = Array.from(document.querySelectorAll("a"));

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + e.pageY + "px; left: " + e.pageX + "px;"
  );
});

clickableItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    cursor.classList.add("click");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("click");
  });
});
/*********** Start Cursor Control ***********/

/*********** Start Lines Animation ***********/
const spinnerWrapper = document.querySelector(".spinner-wrapper");
const linesDiv = document.querySelector(".lines");

function waitBeforeNavigate(ev) {
  ev.preventDefault();
  const goTo = this.getAttribute("href");
  linesDiv.classList.remove("ready");
  linesDiv.classList.remove("start");
  linesDiv.classList.add("no-lines");
  setTimeout(() => {
    window.location = goTo;
  }, 1500);
}
clickableItems.forEach((EL) =>
  EL.addEventListener("click", waitBeforeNavigate)
);

$(window).on("load", function () {
  spinnerWrapper.parentElement.removeChild(spinnerWrapper);
  setTimeout(() => {
    linesDiv.classList.add("finish");
    linesDiv;
  }, 500);
  setTimeout(() => {
    linesDiv.classList.add("ready");
  }, 1500);
});
/*********** End Lines Animation ***********/

/*********** Start Header ***********/
const toggleMenuButton = document.querySelector("#toggle-links-menu");
const linksMenu = document.querySelector(".links-menu");
const TheHeader = document.querySelector("header.header");
toggleMenuButton.addEventListener("click", () => {
  // Header
  if (TheHeader.classList.contains("menuIsActive")) {
    TheHeader.classList.remove("menuIsActive");
  } else {
    TheHeader.classList.add("menuIsActive");
  }

  // Button
  if (toggleMenuButton.classList.contains("clicked")) {
    toggleMenuButton.classList.remove("clicked");
  } else {
    toggleMenuButton.classList.add("clicked");
  }

  // Menu
  if (linksMenu.classList.contains("active")) {
    linksMenu.classList.remove("active");
  } else {
    linksMenu.classList.add("active");
  }
});

// Nav
$(".links .link .opanAndClose").click(function () {
  $(this).toggleClass("active");
  $(this).parent().find(".sub-menu").slideToggle();
});
/*********** End Header ***********/
