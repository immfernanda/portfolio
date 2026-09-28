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

// ── Som nos vídeos dos bastidores (clique pra ouvir) ──
document.querySelectorAll(".window--som video").forEach((v) => {
  v.addEventListener("click", () => {
    const ligar = v.muted;
    // silencia os outros pra não tocar tudo junto
    document.querySelectorAll(".window--som video").forEach((outro) => {
      outro.muted = true;
      outro.closest(".window").classList.remove("is-sound");
    });
    v.muted = !ligar;
    v.volume = 1;
    v.closest(".window").classList.toggle("is-sound", !v.muted);
    if (!v.muted) v.play();
  });
});

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

// ── Rolo de filme (toque no celular, onde não existe hover) ──
document.querySelectorAll(".window--film").forEach((film) => {
  film.addEventListener("click", () => film.classList.toggle("is-rolled"));
});

// ── Números do Sobre sobem de 0 até o valor quando aparecem na tela ──
const counters = document.querySelectorAll("[data-count]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      countObserver.unobserve(el);
      if (reduceMotion) return;
      const alvo = Number(el.dataset.count);
      const prefixo = el.dataset.prefix || "";
      const sufixo = el.dataset.suffix || "";
      const duracao = 1400;
      const inicio = performance.now();
      const passo = (agora) => {
        const t = Math.min((agora - inicio) / duracao, 1);
        const valor = Math.round(alvo * (1 - Math.pow(1 - t, 3)));
        el.textContent = `${prefixo}${valor}${sufixo}`;
        if (t < 1) requestAnimationFrame(passo);
      };
      requestAnimationFrame(passo);
    });
  },
  { threshold: 0.6 }
);
counters.forEach((el) => countObserver.observe(el));

// ── Parallax leve: manchas e rabiscos andam num ritmo diferente do scroll ──
const parallaxEls = document.querySelectorAll("[data-parallax]");
if (!reduceMotion && parallaxEls.length) {
  let ticking = false;
  const atualizar = () => {
    const meio = window.innerHeight / 2;
    parallaxEls.forEach((el) => {
      const r = el.parentElement.getBoundingClientRect();
      const distancia = r.top + r.height / 2 - meio;
      el.style.setProperty("--py", `${(distancia * Number(el.dataset.parallax)).toFixed(1)}px`);
    });
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(atualizar); ticking = true; }
  }, { passive: true });
  atualizar();
}
