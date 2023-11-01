"use strict";

gsap.registerPlugin(Flip);

document.getElementById("Change").onclick = () => {
    const myDiv = document.getElementById("my_Div"),
        initialState = Flip.getState(myDiv, { props: "filter" });

    myDiv.style.filter = "blur(0px)";

    Flip.from(initialState, {
        duration: 2,
        ease: "power3.out",
        onComplete: () => {
            gsap.to(myDiv, {
                delay: 1,
                duration: 1,
                x: "100%",
                y: "50%",
                height: "300px",
                rotate: "720",
                borderRadius: "50%"
            })
        }
    })
}