window.addEventListener('load', function () {
  const popup = document.getElementById('popup-overlay');
  const closeBtn = document.querySelector('.close-popup');

  // Show only once per session
  if (!sessionStorage.getItem('popupShown')) {
    popup.style.display = 'flex';
    sessionStorage.setItem('popupShown', 'true');
  }

  // Close popup on close button click
  closeBtn.addEventListener('click', function () {
    popup.style.display = 'none';
  });

  // Close popup if user clicks outside the popup content
  popup.addEventListener('click', function (e) {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
});
