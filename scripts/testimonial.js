const items = document.querySelectorAll('.testimonial-item');
let currentIndex = 0;

function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

document.querySelector('.testimonial-prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showSlide(currentIndex);
});

document.querySelector('.testimonial-next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
});

// ✅ Auto-slide every 2 minutes (120000 ms)
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}, 40000);
