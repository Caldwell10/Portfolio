// Select filter buttons and project boxes
const filterButtons = document.querySelectorAll('.filter-btn');
const projectBoxes = document.querySelectorAll('.box');

// Add event listener to each filter button
filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        button.classList.add('active');

        // Get the category to filter
        const category = button.getAttribute('data-category');

        // Show/hide projects based on the category
        projectBoxes.forEach((box) => {
            if (category === 'all' || box.getAttribute('data-category').includes(category)) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    });
});
