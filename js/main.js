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
        markers: false, 
        id: 'Section2',
        scrub: 1,
        toggleActions: 'play none reverse reset' 
    },
    y: '50vh',
    rotation: 1200,
    duration: 5,
    
});

/* Animation des 3 images draggable (à ajouter sous ton animation ScrollTrigger) */
Draggable.create(".mes-images-drag", {
    type: "x,y", 
    bounds: "#section2", /* Elles ne sortiront pas de la section 2 */
    dragResistance: -1,
    inertia: true,
    cursor: "grab",
    onClick: function(){
        console.log('Je clic');
    },
    onDrag: function(){
        console.log('Je déplace');
    },
    onDragEnd: function(){
        console.log('Je dépose');
    }
});
gsap.set("#drag1", { rotation: -20 });
gsap.set("#drag2", { rotation: 15 });
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