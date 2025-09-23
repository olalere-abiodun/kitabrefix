document.addEventListener("DOMContentLoaded", () => {
  // ===== Service Items Animation =====
  const serviceItems = document.querySelectorAll(".service-item");

  serviceItems.forEach(item => {
    // Initial state
    item.style.transform = "translateY(30px)";
    item.style.opacity = "0";
  });

  const carousel = document.querySelector(".carousel-services");
  if (carousel) {
    carousel.classList.add("pre-animate"); 
  }

  // Intersection Observer options
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate service items
        if (entry.target.classList.contains("service-item")) {
          entry.target.style.transform = "translateY(-20%)";
          entry.target.style.opacity = "1";
          entry.target.style.transition = "all 0.6s ease-out";
        }

        // Animate carousel
        if (entry.target.classList.contains("carousel-services")) {
          entry.target.classList.add("active"); 
        }

        observer.unobserve(entry.target); // stop observing after animation
      }
    });
  }, observerOptions);

  // Observe all service items
  serviceItems.forEach(item => observer.observe(item));

  // Observe carousel if it exists
  if (carousel) observer.observe(carousel);
});

//  document.querySelectorAll('.toggle-dropdown').forEach(navmenu => {
//     navmenu.addEventListener('click', function(e) {
//       e.preventDefault();
//       this.parentNode.classList.toggle('active');
//       this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
//       e.stopImmediatePropagation();
//     });
//   });
document.querySelectorAll('.toggle-dropdown').forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const parentLi = this.closest('.dropdown');
    parentLi.classList.toggle('dropdown-active');
    e.stopImmediatePropagation();
  });
});


