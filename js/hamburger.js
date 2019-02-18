const hamburger = document.querySelector('.hamburger')
const lineOne = hamburger.querySelector('.line-one')
const lineTwo = hamburger.querySelector('.line-two')
const lineThree = hamburger.querySelector('.line-three')

const lines = [lineOne, lineTwo, lineThree]

const tlm = new TimelineMax({});

const toggleMenu = new TimelineMax({paused: true, reversed: true})

/*
hamburger.addEventListener('mouseenter', _ => {
    tlm.staggerTo(lines, 0.25, {scaleX: 1.5, repeat: 1, yoyo: true}, 0.125)
})
*/

toggleMenu
    .to(lineTwo, .125, {scaleX: 0, transformOrigin:"50% 50%"}, 0)
    .to(lineOne, .125, {rotation: 45, transformOrigin: "50% 50%", y: 8}, .125)
    .to(lineThree, .125, {rotation: -45, transformOrigin: "50% 50%", y: -8}, .125)

hamburger.addEventListener('click', _ => {
    toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse()
})