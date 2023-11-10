// ! Variables
// const animateHats = document.querySelectorAll(".hat__container"); // to select the qualification's container (HTML)
const animateLaManu = document.getElementById("hat__container__animate-js--laManu");
console.log(animateLaManu);

// ! Events
// // * Event to animate the hat into the qualifications' containers
// document.addEventListener("DOMContentLoaded", function() { // add event with DOMContentLoaded to make sure the script works if the DOM is correctly charged (to avoid animation bugs)
//     animateHats.forEach(animateHat => {
//         animateHat.addEventListener("mouseenter", () => {
//             animateHat.classList.add('hat__animate-js', 'animate__animated', 'animate__backInLeft'); // to animate at mouse move with the CSS class and animate.style CDN
//         });
//     });
// });

// * Event to animate LaManu container
animateLaManu.addEventListener("mouseenter", () => {
    animateLaManu.classList.add('laManu__animate-js', 'animate__animated', 'animate__backInUp');
})




const animateTest1 = document.getElementById("test1");
console.log(animateTest1);
animateTest1.addEventListener("pointerenter", () => {
    animateTest1.classList.add('hat__animate-js--test1', 'animate__animated', 'animate__backInLeft')
})

const animateTest2 = document.getElementById("test2");
console.log(animateTest2);
animateTest2.addEventListener("mousemove", () => {
    animateTest2.classList.add('hat__animate-js--test2', 'animate__animated', 'animate__backInLeft')
})

const animateTest3 = document.getElementById("test3");
console.log(animateTest3);
animateTest3.addEventListener("pointermove", () => {
    animateTest3.classList.add('hat__animate-js--test3', 'animate__animated', 'animate__backInLeft')
})