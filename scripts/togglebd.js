document.querySelectorAll('.toggle-dropdown').forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const parentLi = this.closest('.dropdown');
    parentLi.classList.toggle('dropdown-active');
    e.stopImmediatePropagation();
  });
});