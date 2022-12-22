"use strict";

const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");
const image = document.querySelector(".image");
const openSidebar = document.querySelector(".open-sidebar");
const closeSidebar = document.querySelector(".close-sidebar");
const list = document.querySelector(".list");

openSidebar.addEventListener("click", function () {
  navbar.classList.add("sidebar");
  overlay.classList.remove("hidden");
  image.classList.add("hidden");
  closeSidebar.style.display = "flex";
  list.classList.remove("list");
  list.classList.add("sidebar__ul");
});
closeSidebar.addEventListener("click", function () {
  navbar.classList.remove("sidebar");
  overlay.classList.add("hidden");
  image.classList.remove("hidden");
  closeSidebar.style.display = "none";
  list.classList.add("list");
  list.classList.remove("sidebar__ul");
});
