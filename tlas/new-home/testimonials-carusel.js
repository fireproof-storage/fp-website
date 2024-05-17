'use strict'

// testimonials infinite slider
// works toghether with css keyframes

const tastimonials = document.querySelector('.testimonials-list')
const duration = 4
const innerContent = tastimonials.innerHTML

function runTestimonialsAnimation() {
  const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  let d = duration

  while (tastimonials.offsetWidth < w * 2) {
    d += duration
    tastimonials.innerHTML += innerContent
  }

  tastimonials.style.animationDuration = `${d}s`
  tastimonials.classList.add('testimonials-animate')
}

runTestimonialsAnimation()

window.addEventListener('resize', () => {
  tastimonials.innerHTML = innerContent
  tastimonials.classList.remove('testimonials-animate')
  runTestimonialsAnimation()
})
