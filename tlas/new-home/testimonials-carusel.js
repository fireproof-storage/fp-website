'use strict'

// testimonials 
const tastimonials = document.querySelector('.testimonials-list')
const duration = 4
const innerContent = tastimonials.innerHTML

function fillGaps() {
  const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  let d = duration

  while (tastimonials.offsetWidth < w * 2) {
    d += duration
    tastimonials.innerHTML += innerContent
  }

  tastimonials.style.animationDuration = `${d}s`
}

fillGaps()

window.addEventListener('resize', () => {
  tastimonials.style.animationDuration = `${duration}s`
  tastimonials.innerHTML = innerContent
  fillGaps()
})

tastimonials.classList.add('testimonials-animate')
