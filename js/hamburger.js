const hamburger = document.querySelector('.hamburger')
const lineOne = hamburger.querySelector('.line-one')
const lineTwo = hamburger.querySelector('.line-two')
const lineThree = hamburger.querySelector('.line-three')

const lines = [lineOne, lineTwo, lineThree]

const tlm = new TimelineMax({});

hamburger.addEventListener('mouseenter', _ => {
    tlm.staggerTo(lines, 0.25, {scaleX: 1.5, repeat: 1, yoyo: true}, 0.125)
})

