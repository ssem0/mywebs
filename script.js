// Grab elements
const exploreButton = document.getElementById('exploreButton');
const menuOverlay = document.getElementById('menuOverlay');
const closeButton = document.getElementById('closeButton');

// show the menu
exploreButton.addEventListener('click', () => {
    menuOverlay.classList.add('active');
});

document.getElementById('exploreButton').addEventListener('click', function() {
    document.getElementById('menuOverlay').classList.add('active');
});

// close the menu with X
closeButton.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
});

// close menu when a link is clicked
document.querySelectorAll('.menu-overlay nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
    });
});

function viewResume() {
    // resume link
    window.open();
}
