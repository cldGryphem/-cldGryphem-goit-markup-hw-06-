// JavaScript to handle mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const openMenuBtn = document.querySelector('.open-menu-btn');
    const closeMenuBtn = document.querySelector('.mob-menu-close-btn');
    const mobMenu = document.querySelector('.mob-menu');
    const backdrop = document.querySelector('.backdrop');
    const closeModalBtn = document.querySelector('.modal-close');

    // Function to open the mobile menu
    const openMenu = () => {
        mobMenu.classList.add('is-open');
    };

    // Function to close the mobile menu
    const closeMenu = () => {
        mobMenu.classList.remove('is-open');
    };

    // Function to close the modal window
    const closeModal = () => {
        backdrop.classList.remove('is-open');
    };

    // Event listeners for menu buttons
    openMenuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);

    // Event listener for modal close button
    closeModalBtn.addEventListener('click', closeModal);
    
    // Optional: Close modal by clicking on the backdrop
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
            closeModal();
        }
    });
});
