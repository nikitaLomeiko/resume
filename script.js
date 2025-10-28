document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const outputLines = [
    document.getElementById("output-line-1"),
    document.getElementById("output-line-2"),
    document.getElementById("output-line-3"),
    document.getElementById("output-line-4"),
    document.getElementById("output-line-5"),
  ];

  setTimeout(() => outputLines[0].classList.add("show"), 2500);
  setTimeout(() => outputLines[1].classList.add("show"), 3500);
  setTimeout(() => outputLines[2].classList.add("show"), 5000);
  setTimeout(() => outputLines[3].classList.add("show"), 6500);
  setTimeout(() => outputLines[4].classList.add("show"), 8000);

  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
      document.body.style.overflow = "auto";
    }, 1000);
  }, 9000);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("shadow-lg");
  } else {
    header.classList.remove("shadow-lg");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const typingCursor = document.getElementById("typing-cursor");
  const outputLines = [
    document.getElementById("output-line-1"),
    document.getElementById("output-line-2"),
    document.getElementById("output-line-3"),
    document.getElementById("output-line-4"),
    document.getElementById("output-line-5"),
  ];

  setTimeout(() => {
    typingCursor.classList.add("no-cursor");
  }, 1500);

  setTimeout(() => outputLines[0].classList.add("show"), 2500);
  setTimeout(() => outputLines[1].classList.add("show"), 3500);
});
