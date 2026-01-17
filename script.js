/* =========================
   SMOOTH SCROLL FOR NAV
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* =========================
   ACTIVE NAV LINK ON SCROLL
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* =========================
   HEADER SHADOW ON SCROLL
========================= */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 8px 30px rgba(0,0,0,0.4)";
  } else {
    header.style.boxShadow = "none";
  }
});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */
const revealElements = document.querySelectorAll(
  "#hero, #about, #services, #features, #contact, .service, .feature"
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("reveal");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* =========================
   CTA BUTTON MICRO EFFECT
========================= */
const ctaButton = document.querySelector(".cta-button");

if (ctaButton) {
  ctaButton.addEventListener("mouseenter", () => {
    ctaButton.style.transform = "scale(1.08)";
  });

  ctaButton.addEventListener("mouseleave", () => {
    ctaButton.style.transform = "scale(1)";
  });
}

/* =========================
   FORM SUBMIT FAKE SUCCESS
========================= */
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const button = form.querySelector("button");
    button.innerText = "Sending...";
    button.disabled = true;

    setTimeout(() => {
      button.innerText = "Message Sent ✓";
      button.style.background = "linear-gradient(90deg, #00f5d4, #6c63ff)";
      form.reset();
    }, 1500);
  });
}
