// burger//////////////////////////////////////////////////////////////////////////////////////////
document.querySelector('.header__burger').addEventListener('click', () => {
	document.querySelector('.header__burger').classList.toggle('active')
	document.querySelector('.header-nav__menu').classList.toggle('active')
	document.querySelector('body').classList.toggle('lock')
})
// burger//////////////////////////////////////////////////////////////////////////////////////////

// slider//////////////////////////////////////////////////////////////////////////////////////////
let slidesToShow
let sledesToScroll

if (window.innerWidth > 900) {
	slidesToShow = 3
	sledesToScroll = 3
} else if (window.innerWidth > 600) {
	slidesToShow = 2
	sledesToScroll = 2
} else {
	slidesToShow = 1
	sledesToScroll = 1
}

let position = 0
const canteiner = document.querySelector('.slider__canteiner')
const track = document.querySelector('.slider-track')
const slides = document.querySelectorAll('.slide')
const btnPrev = document.querySelector('.slider__btn_prev')
const btnNext = document.querySelector('.slider__btn_next')
const slideCount = slides.length
const slideWidth = canteiner.clientWidth / slidesToShow
const movePosition = sledesToScroll * slideWidth

slides.forEach(slide => {
	slide.style.minWidth = `${slideWidth}px`
})

btnNext.addEventListener('click', () => {
	const slideleft = slideCount - (Math.abs(position) + slidesToShow * slideWidth) / slideWidth

	position -= slideleft >= sledesToScroll ? movePosition : slideleft * slideWidth

	setPosition()
	checkBtns()
})

btnPrev.addEventListener('click', () => {
	const slideleft = Math.abs(position) / slideWidth

	position += slideleft >= sledesToScroll ? movePosition : slideleft * slideWidth

	setPosition()
	checkBtns()
})

const setPosition = () => {
	track.style.transform = `translateX(${position}px)`
}

const checkBtns = () => {
	btnPrev.disabled = position === 0
	btnNext.disabled = position <= -(slideCount - slidesToShow) * slideWidth
}

checkBtns()
// slider//////////////////////////////////////////////////////////////////////////////////////////
