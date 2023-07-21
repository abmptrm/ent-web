const navButton = document.getElementById('nav-button'); 
const navLinks = document.getElementById('nav-links');

navButton.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
});