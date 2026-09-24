/* Import ----------------*/

gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);



/* Variables -------------------*/



/* Fonction ---------------*/





/* Animation premier bloc ----------*/

gsap.from("#vaisseau", {
    x: '-50vw',
    rotation: -60,
    duration: 2,
})



/* Animation deuxieme bloc ------*/

gsap.from("#movingBlock2", {
    scrollTrigger: {
        trigger: "#section2",
        start: 'top 50%',
        end: 'top 10%',
        markers: true, 
        id: 'Section2',
        scrub: 1,
        toggleActions: 'play none reverse reset' 
    },
    y: '50vh',
    rotation: 1200,
    duration: 5,
});

/* Animation troisieme bloc ------*/

let tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
})

tl.to("#movingBlock3",{x:100,})
.to("#movingBlock3",{y:100,})
.to("#movingBlock3",{x:-100,})
.to("#movingBlock3",{y:-100,})

/* Animation quatre bloc ------*/

Draggable.create("#movingBlock4",{
    //type: "x",
    //type: "rotation",
    bounds: "#section4",
    inertia: true,
    dragResistance: 0.5,
})