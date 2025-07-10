// Get references to the DOM elements
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconClosed = document.getElementById('menu-icon-closed');
    const menuIconOpen = document.getElementById('menu-icon-open');

    // Add click event listener to the mobile menu button
    mobileMenuButton.addEventListener('click', () => {
        // Toggle the 'hidden' class on the mobile menu to show/hide it
        mobileMenu.classList.toggle('hidden');

        // Toggle the 'hidden' class on the menu icons to switch between hamburger and close icons
        menuIconClosed.classList.toggle('hidden');
        menuIconOpen.classList.toggle('hidden');
    });

    // Optional: Close the mobile menu if a link inside it is clicked
    // This provides a better user experience on mobile
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuIconClosed.classList.remove('hidden');
                menuIconOpen.classList.add('hidden');
            }
        });
    });

    function openPortfolioPreview() {
    const modal = document.getElementById('portfolioPreviewModal');
    const iframe = document.getElementById('portfolioIframe');
    iframe.src = "https://annikajun.github.io/Portfolio_Assignment/"; // Set the URL of your portfolio assignment
    modal.classList.remove('hidden'); // Show the modal
    document.body.style.overflow = 'hidden'; // Prevent scrolling on the main page
}

function closePortfolioPreview() {
    const modal = document.getElementById('portfolioPreviewModal');
    const iframe = document.getElementById('portfolioIframe');
    iframe.src = ""; // Clear the iframe src to stop any content
    modal.classList.add('hidden'); // Hide the modal
    document.body.style.overflow = ''; // Re-enable scrolling on the main page
}
 