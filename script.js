const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const downloadButton = document.getElementById("downloadButton");
const downloadToast = document.getElementById("downloadToast");

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

let toastTimeout;
downloadButton.addEventListener("click", (event) => {
  // Add your direct installer or ZIP URL here when the game file is ready.
  const DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1_D6IM1aSyR9VH_XieStxe8UXEcJNipsb";
  if (DOWNLOAD_URL) {
    event.preventDefault();
    window.location.href = DOWNLOAD_URL;
    return;
  }
  event.preventDefault();
  downloadToast.textContent = "JergBuilder 1.0.1 download is not connected yet. Add your PC installer or ZIP link in script.js.";
  downloadToast.classList.add("show");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => downloadToast.classList.remove("show"), 4800);
});

const sections = document.querySelectorAll("main section[id]");
const navLinks = siteNav.querySelectorAll('a[href^="#"]');
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach((section) => observer.observe(section));
}