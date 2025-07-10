// Get references to the mobile menu button and the mobile menu itself
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIconClosed = document.getElementById('menu-icon-closed');
const menuIconOpen = document.getElementById('menu-icon-open');

// Add an event listener to the mobile menu button
mobileMenuButton.addEventListener('click', () => {
  // Toggle the 'hidden' class on the mobile menu to show/hide it
  mobileMenu.classList.toggle('hidden');

  // Toggle the 'hidden' and 'block' classes on the SVG icons
  menuIconClosed.classList.toggle('hidden');
  menuIconClosed.classList.toggle('block');
  menuIconOpen.classList.toggle('hidden');
  menuIconOpen.classList.toggle('block');

  // Update aria-expanded attribute for accessibility
  const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
  mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
});


// Variable to hold the timeout ID so we can clear it if needed
let tooltipTimeout;

function toggleTooltip(id) {
    // Clear any existing timeout to prevent multiple tooltips from staying open
    clearTimeout(tooltipTimeout);

    // Close all tooltips except the one being clicked
    document.querySelectorAll('.tooltip-text').forEach(el => {
      if (el.id !== id) {
        el.classList.remove('active');
      }
    });

    const tooltip = document.getElementById(id);
    // Toggle the clicked one
    tooltip.classList.toggle('active');

    // If the tooltip is now active, set a timeout to hide it after 10 seconds
    if (tooltip.classList.contains('active')) {
        tooltipTimeout = setTimeout(() => {
            tooltip.classList.remove('active');
        }, 8000); // 10000 milliseconds = 10 seconds
    }
}

document.addEventListener('click', (event) => {
    let menuIcon = document.querySelector("#menu-icon");
    let navList = document.querySelector(".navlist");
    if (!navList.contains(event.target) && !menuIcon.contains(event.target) && navList.style.display === "block"){
        showNav();
    }
});

