'use strict'

{
  // demo apps carusel
  const appsCarusel = document.querySelector('.demo-carusel')
  const appsCaruselslides = appsCarusel.querySelectorAll('.demo-carusel-item')
  const activeSlide = appsCarusel.querySelector('.active')

  const debounceDelay = 400
  let debounceTimeout = null
  let isRuning = false

  function resizeSlides(ind) {
    if (!window.matchMedia('(hover: hover)').matches) return

    isRuning = true
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(() => {
      isRuning = false
    }, debounceDelay)

    appsCaruselslides.forEach((slide, i)=> {
      const s = 1 - Math.abs(i - ind) / 8
      const x = (i - ind) * 50

      if (i === ind) {
        slide.style.transform = `scale(1.5) translateX(${x}px)`
      } else {
        slide.style.transform = `scale(${s}) translateX(${x}px)`
      }

      slide.classList.remove('hovered')
    })

    activeSlide.classList.remove('active')
    appsCaruselslides[ind].classList.add('hovered')
  }

  function resetSlides(e) {
    if (!window.matchMedia('(hover: hover)').matches) return
  
    appsCaruselslides.forEach( slide => {
      slide.style = ' '
      slide.classList.remove('hovered')
    })
    activeSlide.classList.add('active')
  }

  appsCaruselslides.forEach((slide, ind) => {
    slide.addEventListener('mouseenter', (e) => {
      e.stopPropagation()
      resizeSlides(ind)
    })
  })

  appsCarusel.addEventListener('mouseleave', () => {
    if (isRuning) {
      setTimeout(resetSlides, debounceDelay)
    } else {
      resetSlides()
    }
  })
}
