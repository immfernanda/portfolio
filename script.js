// ── Inclinação das polaroids/janelas (data-tilt) ──
document.querySelectorAll("[data-tilt]").forEach((el) => {
  el.style.setProperty("--tilt", `${el.dataset.tilt}deg`);
});

// ── Reveal on scroll ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ── Tabs ──
const tabs = document.querySelectorAll(".tab");
const glider = document.querySelector(".tabs__glider");

function moveGlider(tab) {
  glider.style.left = `${tab.offsetLeft}px`;
  glider.style.width = `${tab.offsetWidth}px`;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("is-active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");
    moveGlider(tab);

    document.querySelectorAll(".panel").forEach((p) => p.classList.remove("is-active"));
    const panel = document.getElementById(`panel-${tab.dataset.tab}`);
    panel.classList.add("is-active");
    panel.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  });
});

// posiciona o glider na aba ativa ao carregar e ao redimensionar
window.addEventListener("load", () => moveGlider(document.querySelector(".tab.is-active")));
window.addEventListener("resize", () => moveGlider(document.querySelector(".tab.is-active")));

// ── Menu mobile ──
const burger = document.getElementById("navBurger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  burger.classList.toggle("is-open");
  navLinks.classList.toggle("is-open");
});

navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    burger.classList.remove("is-open");
    navLinks.classList.remove("is-open");
  })
);
