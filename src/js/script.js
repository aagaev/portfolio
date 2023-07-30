const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu__close');

hamburger.addEventListener('click', (e) => {
    menu.classList.add('active')
})

closeMenu.addEventListener('click', (e) => {
    menu.classList.remove('active')
})

menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu__overlay')) {
        menu.classList.remove('active')
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && menu.classList.contains('active')) { 
        menu.classList.remove('active')
    }
});

const counters = document.querySelectorAll('.skills__ratings-counter');
const lines = document.querySelectorAll('.skills__ratings-line span');

console.log(counters)
console.log(lines)

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})

