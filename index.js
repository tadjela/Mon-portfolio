const btn = document.getElementById("hamburgerBtn");
const menu = document.getElementById("mobileMenu");
const backdrop = document.getElementById("menuBackdrop");

function openMenu() {
  btn.classList.add("is-active");
  menu.classList.add("is-open");
  btn.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  btn.classList.remove("is-active");
  menu.classList.remove("is-open");
  btn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

btn.addEventListener("click", () => {
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});

backdrop.addEventListener("click", closeMenu);

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu.classList.contains("is-open")) closeMenu();
});

// Close when a drawer link is clicked
document.querySelectorAll(".drawer-links a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
