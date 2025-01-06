// Select filter buttons and project boxes
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

const menu = document.querySelector("#menu")
const nav = document.querySelector(".links")

menu.onclick =() => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');

}
