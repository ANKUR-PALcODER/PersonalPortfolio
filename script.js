const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Function to implement the moving circle animation of the mouse circle
// function mouseCircle(xscale,yscale){
//     window.addEventListener('mousemove',(element)=>{
//         let mouse = document.getElementById('mouse');
//         mouse.style.opacity = 1;
//         // mouse.style.transform = `translate(${element.clientX}px,${element.clientY}px) scale(${xscale},${yscale})`;
//         mouse.style.cssText = `left: ${element.clientX}px; top: ${element.clientY}px;`;
//     });
// }

// Function to implement the skewing animation of moving mouse circle 
// let timeout;
// function mouseCircleSkewer(){
//     let xprev = 0;
//     let yprev = 0;
//     window.addEventListener('mousemove',(event)=>{
//         clearTimeout(timeout);
//         xscale = gsap.utils.clamp(0.8,1.2,event.clientX-xprev);
//         yscale = gsap.utils.clamp(0.8,1.2,event.clientY-yprev);
//         xprev = event.clientX;
//         yprev = event.clientY;
//         mouseCircle(xscale,yscale);
//         timeout = setTimeout(() => {
//             let mouse = document.getElementById('mouse');
//             mouse.style.transform = `translate(${event.clientX}px,${event.clientY}px) scale(1,1)`;
//         }, 100);
//     });
// }

// Function to implement the bottom to top moving text animation of the landing page
function firstPageAnimation(){
    var t1 = gsap.timeline();

    t1.from("#navbar",{
        y:'-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        ease: Expo.easeInOut,
        duration: 1.5,
        stagger: 0.2,
        delay: -1
    })
    .from('#firstfooter',{
        y:'-10',
        opacity:0,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: -1
    })
}

// mouseCircle();
firstPageAnimation();
// mouseCircleSkewer();

// Fuctions to implement the hovering image animation on the skill section
document.querySelectorAll("#skillbox").forEach((element)=>{
    let diffrot = 0;
    let prevrot = 0;
    element.addEventListener("mouseleave",(event)=>{
        gsap.to(element.querySelector("img"),{
            opacity:0,
            ease: Power2,
            top:0,
            left:0
        });
    });
    element.addEventListener("mousemove",(event)=>{
        diffrot = event.clientX-prevrot;
        prevrot = event.clientX;
        let shift = event.clientY-element.getBoundingClientRect().top;
        gsap.to(element.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top: shift,
            left: event.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrot*0.5)
        })
    });
});