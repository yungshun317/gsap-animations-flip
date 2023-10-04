"use strict";

gsap.registerPlugin(Flip);

document.getElementById("Change").onclick = () => {
    const state = Flip.getState(".column, .box");

    document.querySelector(".column").classList.toggle("row");
    // Return a timeline
    Flip.from(state, {
        duration: 2,
        ease: "back.out",
        absolute: true
    });
};