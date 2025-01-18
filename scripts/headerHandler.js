const burgerMenu = document.getElementById('burgerMenu');
const mobileNav = document.getElementById('mobileNav');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');

// Open Menu
burgerMenu.addEventListener('click', () => {
    mobileNav.classList.remove('hidden');
    setTimeout(() => {
        sideMenu.classList.remove('translate-x-full');
    }, 50); // Slight delay for smoother animation
});

// Close Menu
closeMenu.addEventListener('click', () => {
    sideMenu.classList.add('translate-x-full');
    setTimeout(() => {
        mobileNav.classList.add('hidden');
    }, 300); // Match the duration of the transition
});

// Close Menu on Outside Click
mobileNav.addEventListener('click', (e) => {
    if (e.target === mobileNav) {
        sideMenu.classList.add('translate-x-full');
        setTimeout(() => {
            mobileNav.classList.add('hidden');
        }, 300);
    }
});