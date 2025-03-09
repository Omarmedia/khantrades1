//Manu JS
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))



//FAQ JS 
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));



const translations = {
  en: {
    email: "KhanTrades@hotmail.com",
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    faq: "FAQ",
  },
  es: {
    email: "KhanTrades@hotmail.com",
    home: "Inicio",
    services: "Servicios",
    about: "Acerca de",
    contact: "Contacto",
    faq: "Preguntas frecuentes",
  },
  no: {
    email: "KhanTrades@hotmail.com",
    home: "Hjem",
    services: "Tjenester",
    about: "Om oss",
    contact: "Kontakt",
    faq: "Ofte stilte spørsmål",
  },
  it: {
    email: "KhanTrades@hotmail.com",
    home: "Home",
    services: "Servizi",
    about: "Chi siamo",
    contact: "Contatto",
    faq: "Domande frequenti",
  }
};

// Function to switch language
function switchLanguage(selectedLang) {
  document.querySelectorAll("[data-lang]").forEach(element => {
      const key = element.getAttribute("data-lang");
      if (translations[selectedLang][key]) {
          element.textContent = translations[selectedLang][key];
      }
  });
  
  // Store language preference in localStorage
  localStorage.setItem("selectedLanguage", selectedLang);
}

// Event listener for language selection
document.querySelectorAll(".flag").forEach(flag => {
  flag.addEventListener("click", function () {
      const selectedLang = this.getAttribute("data-lang");
      switchLanguage(selectedLang);
  });
});

// Load saved language preference
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLanguage");
  if (savedLang) {
      switchLanguage(savedLang);
  }
});
