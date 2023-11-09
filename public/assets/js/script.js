// ! Variables
const animateHats = document.querySelectorAll(".hat__container"); // to select the qualification's container (HTML)


// ! Events
// * Event to animate the hat into the qualifications' containers
animateHats.forEach(animateHat => {
    animateHat.addEventListener("mouseover", () => {
        animateHat.classList.add('hat__animate-js', 'animate__animated', 'animate__backInLeft'); // to animate at mouse move with the CSS class and animate.style CDN
    });
});