"use strict";

const hero = document.querySelector(".hero");
const header = document.querySelector(".header");
const buttonTop = document.querySelector(".btn-top");
const body = document.body;
const html = document.documentElement;
const allLinks = document.querySelectorAll("a:link");
const btnMobile = document.querySelector(".btn-mobile-nav");
const btnTop = document.querySelector(".btn-top");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      body.classList.add("sticky");
      buttonTop.classList.remove("hidden");
    }
    if (ent.isIntersecting) {
      body.classList.remove("sticky");
      buttonTop.classList.add("hidden");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(hero);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    if (header.classList.contains("nav-open")) {
      html.classList.toggle("prevent-scrolling");
    }

    const href = link.getAttribute("href");
    if (!href.startsWith("#")) return;

    e.preventDefault();
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});

btnMobile.addEventListener("click", function () {
  header.classList.toggle("nav-open");
  html.classList.toggle("prevent-scrolling");
  if (!btnTop.classList.contains("hidden")) btnTop.classList.add("hidden");
});
