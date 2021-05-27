/*********** Start Loading***********/
const spinnerWrapper = document.querySelector(".spinner-wrapper");
window.addEventListener("load", function () {
  spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});
/*********** Start Loading ***********/

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
const linesDiv = document.querySelector(".lines");
document.addEventListener("DOMContentLoaded", function () {
  linesDiv.classList.add("finish");
  setTimeout(() => {
    linesDiv.classList.add("ready");
  }, 1000);
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
new TypeIt("#typeElement", {
  speed: 100,
  loop: true,
  html: true,
  cursor: false,
})
  .type("I Love <span class='letterColored'>Javascript</span>")
  .pause(1500)
  .delete()
  .type("I Code Cool <span class='letterColored'>websites</span>")
  .pause(1500)
  .delete()
  .type("I Code SQL In <span class='letterColored'>lowercase &#128513</span>")
  .pause(1500)
  .delete()
  .go();

/*
const boxItem = document.querySelector(".box-item");
const inkDiv = document.querySelector(".ink");
boxItem.addEventListener("mouseenter", (e) => {
  inkDiv.style.left =
    e.pageX - e.target.offsetLeft - inkDiv.offsetWidth / 2 + "px";
  inkDiv.style.top =
    e.pageY - e.target.offsetTop - inkDiv.offsetHeight / 2 + "px";
  boxItem.classList.add("hovered");
});
boxItem.addEventListener("mouseleave", (e) => {
  inkDiv.style.left =
    e.pageX - e.target.offsetLeft - inkDiv.offsetWidth / 2 + "px";
  inkDiv.style.top =
    e.pageY - e.target.offsetTop - inkDiv.offsetHeight / 2 + "px";
  boxItem.classList.remove("hovered");
});
*/
