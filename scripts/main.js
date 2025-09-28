// Collapse navbar on nav link click (mobile) — exclude dropdown toggles
document.querySelectorAll('.navbar-collapse .nav-link:not(.dropdown-toggle)').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});


// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// Loader handling (wait for hero background image)
document.addEventListener('DOMContentLoaded', function () {
  const loader = document.getElementById('loader');
  const content = document.getElementById('page-content');
  
  if (loader && content) {
    const heroBg = new Image();
    heroBg.src = "images/carousel2.jpg"; 

    if (heroBg.complete) {
      loader.style.display = 'none';
      content.style.display = 'block';
    } else {
      heroBg.onload = function () {
        loader.style.display = 'none';
        content.style.display = 'block';
      };
    }
  }
});


// WhatsApp popup toggle
const whatsappBtn = document.getElementById('whatsapp-btn');
const chatBox = document.getElementById('chat-box');

if (whatsappBtn && chatBox) {
  whatsappBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent closing immediately
    chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
  });

  // Close WhatsApp chat when clicking outside
  document.addEventListener('click', function (e) {
    if (!chatBox.contains(e.target) && e.target.id !== 'whatsapp-btn') {
      chatBox.style.display = 'none';
    }
  });
}


// Highlight active nav link on scroll
const sections = document.querySelectorAll("section[id], div[id]");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 150;

  sections.forEach((section) => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(section.id)) {
          link.classList.add("active");
        }
      });
    }
  });
});
