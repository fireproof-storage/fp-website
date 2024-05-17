'use strict'

{
  // demo apps carusel
  const appsCarusel = document.querySelector('.demo-carusel')
  const appsCaruselslides = appsCarusel.querySelectorAll('.demo-carusel-item')
  // appsCarusel.style.transition = `transform 0.2s ease`

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
    console.log(ind)
    appsCaruselslides.forEach((slide, i)=> {
      //TO-DO make cards that are farther from the cursor smaller
    })
  }

  appsCarusel.addEventListener('mousemove', moveCarusel)
  appsCarusel.addEventListener('mouseleave', () => {
    appsCaruselslides.forEach( slide => {
      slide.style.transform = `translateX(0)`
    })
  })

  appsCaruselslides.forEach((slide, ind)=> {
    slide.addEventListener('mouseenter', () => resizeSlides(ind))
  })
}
