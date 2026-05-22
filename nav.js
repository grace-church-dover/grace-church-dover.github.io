const navbar = document.getElementById('navbar');
const toggle = document.getElementById('nav-toggle');
const mobileQuery = window.matchMedia('(max-width: 900px)');

if (toggle) {
    toggle.addEventListener('click', () => {
        const isOpen = navbar.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        if (!isOpen) {
            document.querySelectorAll('.dropdown.open').forEach((d) => d.classList.remove('open'));
        }
    });
}

document.querySelectorAll('.dropdown > a').forEach((link) => {
    link.addEventListener('click', (e) => {
        if (mobileQuery.matches) {
            e.preventDefault();
            link.parentElement.classList.toggle('open');
        } else {
            link.blur();
        }
    });
});

document.querySelectorAll('.dropdown-menu a').forEach((link) => {
    link.addEventListener('click', () => {
        link.blur();
        navbar.classList.remove('open');
        document.querySelectorAll('.dropdown.open').forEach((d) => d.classList.remove('open'));
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navbar.classList.remove('open');
        document.querySelectorAll('.dropdown.open').forEach((d) => d.classList.remove('open'));
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
});
