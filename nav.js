const navbar = document.getElementById('navbar');
const toggle = document.getElementById('nav-toggle');
const mobileQuery = window.matchMedia('(max-width: 900px)');

const closeDropdowns = () => {
    document.querySelectorAll('.dropdown.open').forEach((d) => d.classList.remove('open'));
};

const setMenuOpen = (open) => {
    navbar.classList.toggle('open', open);
    if (toggle) toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) closeDropdowns();
};

if (toggle) {
    toggle.addEventListener('click', () => {
        setMenuOpen(!navbar.classList.contains('open'));
    });
}

document.querySelectorAll('.dropdown > a').forEach((link) => {
    link.addEventListener('click', (e) => {
        if (mobileQuery.matches) {
            e.preventDefault();
            const dropdown = link.parentElement;
            const wasOpen = dropdown.classList.contains('open');
            closeDropdowns();
            if (!wasOpen) dropdown.classList.add('open');
        } else {
            link.blur();
        }
    });
});

document.querySelectorAll('.dropdown-menu a').forEach((link) => {
    link.addEventListener('click', () => {
        link.blur();
        setMenuOpen(false);
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        setMenuOpen(false);
    }
});
