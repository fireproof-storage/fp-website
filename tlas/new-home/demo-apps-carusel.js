'use strict'

{
  // demo apps carusel
  const appsCarusel = document.querySelector('.demo-carusel')
  const appsCaruselslides = appsCarusel.querySelectorAll('.demo-carusel-item')
  const activeSlide = appsCarusel.querySelector('.active')

  const shift = 4
  let posX = 0

  function moveCarusel(e) {
    if (!window.matchMedia('(hover: hover)').matches) return

    const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    posX = (w / 2 - e.clientX) / shift

    appsCaruselslides.forEach( slide => {
      slide.style.transform = `translateX(${posX}px)`
    })
  }

  function resizeSlides(ind) {
    appsCaruselslides.forEach((slide, i)=> {
      const s = 1 - Math.abs(i - ind) / 8
      const x = (i - ind) * 50
      if (i === ind) {
        slide.style.transform = `scale(${s * 1.2}) translateX(${x}px)`
      } else {
        slide.style.transform = `scale(${s}) translateX(${x}px)`
      }
    })

    if (activeSlide !== appsCaruselslides[ind]) {
      activeSlide.style.width = '100%'
      activeSlide.style.height = '80%'
      activeSlide.style.boxShadow = 'unset'
    }
  }

  appsCarusel.addEventListener('mouseleave', () => {
    activeSlide.style = ' '
    appsCaruselslides.forEach( slide => {
      slide.style = ' '
    })
  })

  appsCaruselslides.forEach((slide, ind)=> {
    slide.addEventListener('mouseenter', () => resizeSlides(ind))
  })
}
