const hamburger = document.querySelector('.hamburger')
const lineOne = hamburger.querySelector('.line-one')
const lineTwo = hamburger.querySelector('.line-two')
const lineThree = hamburger.querySelector('.line-three')

const tlm = new TimelineMax({});

hamburger.addEventListener('mouseenter', _ => {
    tlm
        .to(lineOne, .25, {scaleX: 1.5})
        .to(lineOne, .25, {scaleX: 1})
})