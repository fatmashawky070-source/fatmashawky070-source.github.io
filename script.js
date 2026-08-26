const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 180) current = section.id;
  });
  links.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});
