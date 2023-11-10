// // ? Boucle foreach de base qui genere des animations buguées :
// // ! Variables
// const animateHats = document.querySelectorAll(".hat__container"); // to select the qualification's container (HTML)

// // ! Events
// // * Event to animate the hat into the qualifications' containers
// animateHats.forEach(animateHat => {
//     animateHat.addEventListener("mouseenter", () => {
//         animateHat.classList.add('hat__animate-js', 'animate__animated', 'animate__backInLeft'); // to animate at mouse move with the CSS class and animate.style CDN
//     });
// });











// ! Variables
const animateHats = document.querySelectorAll(".hat__container"); // to select the qualification's container (HTML)


// ! Events
// * Event to animate the hat into the qualifications' containers
document.addEventListener("DOMContentLoaded", function() { // add event with DOMContentLoaded to make sure the script works if the DOM is correctly charged (to avoid animation bugs)
    animateHats.forEach(animateHat => {
        animateHat.addEventListener("pointerenter", () => {
            animateHat.classList.add('hat__animate-js', 'animate__animated', 'animate__backInLeft'); // to animate at mouse move with the CSS class and animate.style CDN
        });
    });
});