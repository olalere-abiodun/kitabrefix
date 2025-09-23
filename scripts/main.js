// Collapse navbar on nav link click (mobile)
document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Loader display on page load
// window.addEventListener('load', function () {
//   const loader = document.getElementById('loader');
//   const content = document.getElementById('page-content');

//   loader.style.display = 'none';
//   content.style.display = 'block';
// });

// Show loader early during DOM load
// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('loader').style.display = 'flex';
// });

document.addEventListener('DOMContentLoaded', function () {
  const loader = document.getElementById('loader');
  const content = document.getElementById('page-content');
  
  // Path to your hero background image
  const heroBg = new Image();
  heroBg.src = "images/carousel2.jpg"; 

  // If the image is already cached
  if (heroBg.complete) {
    loader.style.display = 'none';
    content.style.display = 'block';
  } else {
    // Wait until it loads
    heroBg.onload = function () {
      loader.style.display = 'none';
      content.style.display = 'block';
    };
  }
});



// WhatsApp popup toggle
const whatsappBtn = document.getElementById('whatsapp-btn');
const chatBox = document.getElementById('chat-box');

whatsappBtn.addEventListener('click', () => {
  chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
});

// Optional: close WhatsApp chat when clicked outside
document.addEventListener('click', function (e) {
  if (!document.getElementById('whatsapp-chat-popup').contains(e.target) && e.target.id !== 'whatsapp-btn') {
    chatBox.style.display = 'none';
  }
});



// Highlight 

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

