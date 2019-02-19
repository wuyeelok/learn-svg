const hamburger = document.querySelector('.hamburger')
const lineOne = hamburger.querySelector('.line-one')
const lineTwo = hamburger.querySelector('.line-two')
const lineThree = hamburger.querySelector('.line-three')

const lines = [lineOne, lineTwo, lineThree]

const tlm = new TimelineMax({});

const toggleMenu = new TimelineMax({paused: true, reversed: true})


hamburger.addEventListener('mouseenter', () => {
    if(hamburger.classList.contains('js-x')) {
        return
    }
    tlm.staggerTo(lines, 0.25, {scaleX: 1.5, repeat: 1, yoyo: true, ease: Power2.easeInOut, svgOrigin: "50 50"}, 0.125)
})


toggleMenu
    .to(lineTwo, .125, {scaleX: 0})
    .to(lineOne, .25, {transformOrigin: "50% 50%", y: 8, ease: Power2.easeInOut}, "slide")
    .to(lineThree, .25, {transformOrigin: "50% 50%", y: -8, ease: Power2.easeInOut}, "slide")
    .to(hamburger, .5, {rotation: 360, ease: Power4.easeInOut})
    .to(lineOne, .25, {rotation: 45, ease: Power2.easeInOut}, "cross")
    .to(lineThree, .25, {rotation: -45, ease: Power2.easeInOut}, "cross")

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('js-x')
    toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse()
})