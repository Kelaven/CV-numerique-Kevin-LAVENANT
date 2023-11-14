// ! Variables

// to timeline :
const allRounds = document.querySelectorAll(".box-timeline__round");
const allBoxes = document.querySelectorAll(".box-timeline__box");
const controller = new ScrollMagic.Controller() // create controller with scrollmagic, it's a container for all my animations at scroll which are called scenes
// to qualifications :
const animateHats = document.querySelectorAll(".hat__container"); // to select the qualification's container (HTML)
const animateLaManu = document.getElementById("hat__container__animate-js--laManu");
// to portfolio :
const appearsTexts = document.querySelectorAll(".box-portfolio--animation");
const appearsTextsContainers = document.querySelectorAll(".box-portfolio");



// ! Events

// * Event to animate timeline
allBoxes.forEach(box => {
    for (let index = 0; index < allRounds.length; index++) { // the loop will iterate through all the circles
        if (allRounds[index].getAttribute('data-anim') === box.getAttribute('data-anim')) { // if each round attribute is the same than the boxe attribute (thanks to data-anim=1, data-anim=2 etc. in HTML)
            
            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5}) // tween is a GSAP animation. I want the box get animation from up to down
        
            let scene = new ScrollMagic.Scene({ // create scene thanks to the crontroller 
                triggerElement: allRounds[index], // my trigger element is the rounds. Trigger is the element which match with the apparition animation of boxes
                reverse: false // to keep boxes visible event if I scroll in the reverse position
            })
            .setTween(tween) // add at the scene the animation created above
            // .addIndicators() // to see mark of trigger's fonctionnement, I can comment this line after to remove their visibilies
            .addTo(controller) // to add the scene at the controller
        }
    }
}); // So, when I find the round wich match with the box, I create a animation for this box (with tween).
    // The scene allows the animation to appear in one moment - one triggerElement (=élément déclencheur). 
    // Here the trigger element is the round which match with the boxe (thanks to their same attribute). 
    // After that, I add the tween at the scene to launch this tween (=animation) when I scroll until the triggerElement. 
    // NB : even if I create a scene, I have to add it at the controller (with addTo).     



// * Event to animate the hat into the qualifications' containers
document.addEventListener("DOMContentLoaded", () => { // add event with DOMContentLoaded to make sure the script works if the DOM is correctly charged (to avoid animation bugs)
    animateHats.forEach(animateHat => {
        animateHat.addEventListener("mouseenter", (e) => {
            const idAppear = e.target.id;
            console.log(idAppear);
            const idAppear1 = document.querySelector(`[data-anim-hat="${idAppear}"]`);
            console.log(idAppear1);
            if (idAppear1) {
                idAppear1.classList.add('hat__animate-js', 'animate__animated', 'animate__backInLeft'); // to animate at mouse move with the CSS class and animate.style CDN
            }
        });
    });
});

// * Event to animate LaManu container
animateLaManu.addEventListener("mouseenter", () => {
    animateLaManu.classList.add('laManu__animate-js', 'animate__animated', 'animate__backInUp');
});











// * Event to animate portfolio
appearsTextsContainers.forEach(appearTextContainer => {
    // Apparition animation
    appearTextContainer.addEventListener("mouseenter", (e) => { // "e" is the object of the event wich contains informations about this event like the target ("e.target")
        const idShow = e.target.id; // to get ID of the element I over with the mouse (text's container)
        console.log(idShow);
        const idShow1 = document.querySelector(`[data-id-show="${idShow}"]`); // to select the element (<p>) with the attribute "data-id-show" overs precedently : in HTML, I have an ID named box-portfolio--1 and the same for the dataset
        console.log(idShow1);
        // so idShow get the id of the container I overs. Then idShow1 associate this id with the dataset of the div wich have the same value. So I can use my class
        if (idShow1) { // if it's true
            idShow1.classList.remove('d-none');
            // select CSS created class :
            idShow1.classList.remove('box-portfolio--disappear'); // to reset the class disappear
            idShow1.classList.add('box-portfolio--appear')
        }
    });
    // Disappearance animation
    appearTextContainer.addEventListener("mouseleave", (e) => {
        const idHide = e.target.id;
        const idHide1 = document.querySelector(`[data-id-show="${idHide}"]`);
        if (idHide1) {
            idHide1.classList.remove('box-portfolio--appear'); // to reset the class appear
            idHide1.classList.add('box-portfolio--disappear');
        }
    });
    // NB : I can use the event "animationend" if I need to detect the animation's end.
    // Then, I can reset CSS class into the function to repeat the entire animation.
});







// ? to animate footer
const footerLogos = document.querySelectorAll(".footer-logos")
console.log(footerLogos);

function animaterFooter() {
    gsap.fromTo(footerLogos, { y : 0}, {y : -110, // it's like tranform : translateY(); in CSS
    //     // ease : "bounce", // crescendo effect
    duration : 1, // the animation's duration
    stagger : {  // decalage time between each logos, so I create object. Thanks to this object, the stagger operate beetwen each logo
        each : 0.1 , // decalage time
        repeat : 5,
        yoyo : true, // to come back
        from : "center" // to get the animation effect from the center element
    }
})
}


animaterFooter()