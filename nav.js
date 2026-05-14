document.querySelectorAll('.dropdown > a, .dropdown-menu a').forEach((link) => {
    link.addEventListener('click', () => link.blur());
});
