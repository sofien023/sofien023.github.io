/**
 * main.js — Portfolio application logic
 * Depends on: i18n.js (T object), config.js (CONFIG object), EmailJS SDK
 */

/* ══════════════════════════════════════
   GOOGLE ANALYTICS — injected from config
══════════════════════════════════════ */
(function () {
  if (!CONFIG.GA_MEASUREMENT_ID || CONFIG.GA_MEASUREMENT_ID.startsWith("YOUR_")) return;

  const script = document.createElement("script");
  script.async = true;
  script.src   = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", CONFIG.GA_MEASUREMENT_ID);
})();

/* ══════════════════════════════════════
   EMAILJS INITIALIZATION
══════════════════════════════════════ */
(function () {
  emailjs.init(CONFIG.EMAILJS_PUBLIC_KEY);
})();

/* ══════════════════════════════════════
   LANGUAGE / i18n
══════════════════════════════════════ */

/**
 * Detect the preferred language from localStorage → browser → fallback to 'en'.
 * @returns {'en'|'fr'|'ar'}
 */
function detectLang() {
  const saved = localStorage.getItem("lang");
  if (saved && T[saved]) return saved;

  const browser = (navigator.language || navigator.userLanguage || "en")
    .toLowerCase()
    .slice(0, 2);
  if (browser === "fr") return "fr";
  if (browser === "ar") return "ar";
  return "en";
}

let lang = detectLang();

/**
 * Apply a language across the entire page.
 * @param {'en'|'fr'|'ar'} l
 */
function setLang(l) {
  lang = l;
  const t   = T[l];
  const html = document.documentElement;

  /* Direction & lang attribute */
  html.setAttribute("lang", l);
  html.setAttribute("dir", l === "ar" ? "rtl" : "ltr");
  document.body.classList.toggle("ar", l === "ar");

  /* Text content */
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* Placeholders */
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (t[key] !== undefined) el.setAttribute("placeholder", t[key]);
  });

  /* Active lang button */
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.textContent === l.toUpperCase());
  });

  localStorage.setItem("lang", l);
}

/* Apply on page load */
setLang(lang);

/* ══════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════ */
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const btn      = document.getElementById("submit_btn");
  const response = document.getElementById("response");

  btn.textContent = "…";
  btn.disabled    = true;

  emailjs
    .send(CONFIG.EMAILJS_SERVICE_ID, CONFIG.EMAILJS_TEMPLATE_ID, {
      user_name:  document.getElementById("user_name").value,
      user_email: document.getElementById("user_email").value,
      message:    document.getElementById("message").value,
    })
    .then(() => {
      const msg = { ar: "✅ تم الإرسال!", fr: "✅ Message envoyé !", en: "✅ Message sent!" };
      response.textContent = msg[lang] || msg.en;
      document.getElementById("contact-form").reset();
    })
    .catch(() => {
      const msg = { ar: "❌ فشل الإرسال.", fr: "❌ Échec de l'envoi.", en: "❌ Failed to send." };
      response.textContent = msg[lang] || msg.en;
    })
    .finally(() => {
      btn.textContent = T[lang]["contact.send"];
      btn.disabled    = false;
    });
});

/* ══════════════════════════════════════
   PROJECT CARDS — click to open link
══════════════════════════════════════ */
document.querySelectorAll(".project-card[data-href]").forEach((card) => {
  card.addEventListener("click", () => window.open(card.dataset.href, "_blank"));
});

/* ══════════════════════════════════════
   MOBILE NAVIGATION
══════════════════════════════════════ */
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("open");
});

/* ══════════════════════════════════════
   SCROLL ANIMATIONS (Intersection Observer)
══════════════════════════════════════ */
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".fade-up").forEach((el) => fadeObserver.observe(el));
