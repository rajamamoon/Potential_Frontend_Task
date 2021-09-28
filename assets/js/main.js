// JavaScript Document

/* Mobile navbar script */
const mobileMenuButton = document.querySelector('.burger-menu');
const headNavbar = document.querySelector('.head-navbar');
const mobileNavItems = document.querySelectorAll('.mobile-nav__item');

/* Checking whether the array of menu items contains at least one element */
if (mobileNavItems.length > 0) {
    /* Adding an event listener to the click event */
    mobileMenuButton.addEventListener('click', () => {
        headNavbar.classList.toggle('open-mobile-nav');
        document.body.classList.toggle('no-scroll');
    });

    /* Adding an event listener to the click event for each element of the array */
    mobileNavItems.forEach((item) => {
        item.addEventListener('click', () => {
            headNavbar.classList.remove('open-mobile-nav');
            document.body.classList.remove('no-scroll');
        });
    });
}
