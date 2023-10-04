"use strict";

gsap.registerPlugin(Flip);

document.getElementById("Change").onclick = () => {
    const state = Flip.getState(".innerBox"),
        innerBox = document.querySelector(".innerBox"),
        box2 = document.querySelector(".box2");

    console.log(state);
    box2.appendChild(innerBox);
    Flip.fit('.innerBox', '.box2');

    Flip.from(state, { duration: 10, scale: true });
}