// Existing Filter and Menu Toggle Logic

// Filter buttons and project boxes
const filterButtons = document.querySelectorAll('.filter-btn');
const projectBoxes = document.querySelectorAll('.box');

// Add event listener to each filter button
filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.getAttribute('data-category');

        projectBoxes.forEach((box) => {
            if (category === 'all' || box.getAttribute('data-category').includes(category)) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    });
});

// Menu toggle logic
const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

// Hover and Click Logic for Project Boxes

// Select all image containers
const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach((container) => {
    const overlayLinks = container.querySelector('.overlay-links');

    // Hover logic
    container.addEventListener('mouseenter', () => {
        overlayLinks.style.display = 'flex'; // Show links on hover
    });

    container.addEventListener('mouseleave', () => {
        overlayLinks.style.display = 'none'; // Hide links when not hovering
    });

    // Click logic for toggling visibility
    container.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click from bubbling up
        overlayLinks.style.display =
            overlayLinks.style.display === 'flex' ? 'none' : 'flex';
    });
});

// Close overlay when clicking outside the project box
document.addEventListener('click', (event) => {
    imageContainers.forEach((container) => {
        const overlayLinks = container.querySelector('.overlay-links');
        if (!container.contains(event.target)) {
            overlayLinks.style.display = 'none';
        }
    });
});
