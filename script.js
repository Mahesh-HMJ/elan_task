document.addEventListener("DOMContentLoaded", function () {
    // add padding top to show content behind navbar
    navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Initialize Bootstrap popovers
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
});

//GSAP animations

gsap.registerPlugin(ScrollTrigger);
gsap.from(".nav-item", {
    duration: 2,
    y: "50",
    delay:1,
    opacity: 0,
    stagger:0.2,
})

gsap.from(".heading", {
    duration: 2,
    y: "50",
    delay:1,
    opacity: 0,
    scrollTrigger:'.heading',
})
