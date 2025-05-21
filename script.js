// script.js

// --- Image Carousel ---
const images = document.querySelectorAll("#carousel img");
let index = 0;

function rotateImages() {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
}

setInterval(rotateImages, 3000);

// --- Language Switcher ---

const translations = {
  de: {
    title: "Eine Gemeinschaft unter einem Dach",
    description:
      "Wir fördern gemeinschaftliches Wohnen in Norddeutschland – als Antwort auf soziale Isolation, Wohnungsnot und den Wunsch nach einem neuen Miteinander.",
    button: "Bald verfügbar",
  },
  en: {
    title: "A Community Under One Roof",
    description:
      "We promote coliving in Northern Germany — addressing isolation, housing shortages, and fostering meaningful shared spaces.",
    button: "Coming Soon",
  },
};

function switchLanguage(lang) {
  const content = translations[lang];

  document.querySelector(".text-content h2").textContent = content.title;
  document.querySelector(".text-content p").textContent = content.description;
  document.querySelector(".btn").textContent = content.button;

  // Store user preference
  localStorage.setItem("language", lang);
}

// Attach event listeners
document.querySelectorAll(".lang-switch span").forEach((el) => {
  el.addEventListener("click", () => switchLanguage(el.textContent.toLowerCase()));
});

// Load stored language or default to German
const savedLang = localStorage.getItem("language") || "de";
switchLanguage(savedLang);
