const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Toggle the mobile menu when the hamburger icon is clicked
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});