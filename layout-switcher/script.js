"use strict";

gsap.registerPlugin(Flip);

const outerContainer = document.querySelector("#outer-container"),
    containers = gsap.utils.toArray(".flex-container"),
    // containerNodeList = document.querySelectorAll(".flex-container"),
    movingContent = gsap.utils.toArray(".inner-container, .inner-container p");

console.log(outerContainer);
// <div id="outer-container" class="flex-container">...</div>
console.log(containers);
/*
(3) [div#outer-container.flex-container, div#inner-container1.inner-container.flex-container.column, div#inner-container2.inner-container.flex-container.column]
    0: div#outer-container.flex-container
    1: div#inner-container1.inner-container.flex-container.column
    2: div#inner-container2.inner-container.flex-container.column
    length: 3
    [[Prototype]]: Array(0)
*/
// console.log(containerNodeList);
/*
NodeList(3) [div#outer-container.flex-container, div#inner-container1.inner-container.flex-container.column, div#inner-container2.inner-container.flex-container.column]
    0: div#outer-container.flex-container
    1: div#inner-container1.inner-container.flex-container.column
    2: div#inner-container2.inner-container.flex-container.column
    length: 3
    [[Prototype]]: NodeList
*/
console.log(movingContent);
/*
(6) [div#inner-container1.inner-container.flex-container.column, p.item.item1, p.item.item2, div#inner-container2.inner-container.flex-container.column, p.item.item3, p.item.item4]
    0: div#inner-container1.inner-container.flex-container.column
    1: p.item.item1
    2: p.item.item2
    3: div#inner-container2.inner-container.flex-container.column
    4: p.item.item3
    5: p.item.item4
    length: 6
    [[Prototype]]: Array(0)
*/