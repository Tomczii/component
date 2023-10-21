const bars = document.querySelector('.bars')
const nav = document.querySelector('.navigation')

const handleClick = () => {
	bars.classList.toggle('bars__close')
	nav.classList.toggle('navigation__active')
}

bars.addEventListener('click', handleClick)
