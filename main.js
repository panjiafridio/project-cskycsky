import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: ".section-one",
    //   pin: true,
        start: "top top",
        end: "+=500",
        scrub: 1,
        ease: "power1.inOut",
        duration: 1, 
    },
});
  
  // add animations and labels to the timeline
  tl
    .to(".content h1", {
        y : 50,
        autoAlpha: 0 
    })
    .from(".about-img img", {
        x : 100,
        autoAlpha: 0 ,
        ease: "power1.out"
    })
    .from(".about-text h1", {
        x : -100,
        autoAlpha: 0 ,
        ease: "power1.out"
    })
    .from(".about-text p", {
        x : -100,
        autoAlpha: 0 ,
        ease: "power1.out"
    })

// Tranformation animate section
    let tl3 = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: ".section-two",
        //   pin: true,
            start: "top 200",
            end: "+=500",
            scrub: 1,
            ease: "power1.inOut",
            duration: 1, 
        },
    });
    tl3
    .from(".section-three h1", {
        x : -100,
        autoAlpha: 0 ,
        ease: "power1.out"
    })
    .from(".transformation-img", {
        y : 100,
        autoAlpha: 0 ,
        ease: "power1.out"
    })
    .from(".transformation-text", {
        y : 100,
        autoAlpha: 0 ,
        ease: "power1.out"
    })

// Service animate section
    let tlThree = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: ".section-three",
        //   pin: true,
            start: "top 200",
            end: "+=500",
            scrub: 1,
            ease: "power1.inOut",
            duration: 1, 
        },
    })
    tlThree
    .from("#service-h1", {
        y : -100,
        autoAlpha: 0 ,
        ease: "power1.out"
    })
    .from(".service-card", {
        y : 100,
        autoAlpha: 0 ,
        stagger: 0.3,
        ease: "power1.out"
    })

// Experience animate section
    let tlFour = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: ".section-five",
        //   pin: true,
            start: "top 200",
            end: "+=500",
            scrub: 1,
            ease: "power1.inOut",
            duration: 1, 
        },
    })
    tlFour
    .from(".section-five h1, .section-five p", {
        y : -100,
        autoAlpha: 0 ,
        ease: "power1.out"
    })
    .from(".experience-text", {
        x : -100,
        autoAlpha: 0 ,
        ease: "power1.out"
    },0)
    .from(".experience-text-2", {
        x : 100,
        autoAlpha: 0 ,
        ease: "power1.out"
    },0)
    .from(".section-six", {
        y : 100,
        autoAlpha: 0 ,
        ease: "power1.out"
    })

let bar = document.querySelector(".bar")
let navbar = document.querySelector(".navbar")

bar.addEventListener("click", function () {
    navbar.classList.toggle("navbar-animation")
})
