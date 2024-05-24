'use strict'

// testimonials and logos infinite slider
// works toghether with css keyframes

const testimonials = document.querySelector('.testimonials-list')
const logos = document.querySelector('.logos-list')

const duration = 8

const innerContentTestimonials = testimonials.innerHTML
const innerContentLogos = logos.innerHTML

function runTestimonialsAnimation() {
  const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  let testimonialsDuration = duration
  let logosDuration = duration

  while (testimonials.offsetWidth < w * 2) {
    testimonialsDuration += duration
    testimonials.innerHTML += innerContentTestimonials
  }

  while (logos.offsetWidth < w * 2) {
    logosDuration += duration
    logos.innerHTML += innerContentLogos
  }

  logos.style.animationDuration = `${logosDuration}s`
  testimonials.style.animationDuration = `${testimonialsDuration}s`

  testimonials.classList.add('testimonials-animate')
  logos.classList.add('logos-animate')
}

runTestimonialsAnimation()

window.addEventListener('resize', () => {
  testimonials.innerHTML = innerContentTestimonials
  logos.innerHTML = innerContentLogos
  testimonials.classList.remove('testimonials-animate')
  logos.classList.remove('logos-animate')
  runTestimonialsAnimation()
})
