'use strict'

{
  // flying hint API:
  // 1. add #flying-hint to an empty styled element that will be a hint
  // 2. add data-hint attribute to all triggers; value is the hint text
  // 3. if trig elements are close to right and bottom edges of the screen
  //    add data-edge="true" attribute
  // 4. to make a part of a hint text bolder, wrap it into /b.../b

  const hint = document.getElementById('flying-hint')
  const hintTriggers = document.querySelectorAll('[data-hint]')

  hint.style.position = 'absolute'
  hint.style.top = '0'
  hint.style.left= '0'
  hint.style.opacity = '0'
  hint.style.zIndex = '999'
  hint.style.transition = 'opacity 0.4s ease'

  let posX = 0
  let posY = 0
  let mouseX = 0
  let mouseY = 0

  let indX = 0
  let indY = 0

  const shiftX = 10
  const shiftY = 45
  const ease = 0.08

  let isMobile = !window.matchMedia('(hover: hover)').matches
  let mobileReset = false

  const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  const h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

  function showHint() {
    hintTriggers.forEach(trigger => {
      trigger.onmouseenter = () => {
        hint.style.opacity = '1'
        updateText(trigger.dataset.hint)
        if (trigger.dataset.edge) {
          handleEdge()
        } else {
          indX = 0
          indY = 0
        }
      }
      trigger.onmouseleave = () => {
        hint.style.opacity = '0'
      }
    })
  }

  function updateText(text) {
    const regex = /\/b.*?\/b/
    if (text.match(regex)) {
      const updatedText = text.match(regex)[0].slice(2, -2)
      hint.innerHTML = text.replace(regex, `<span class="bolder">${updatedText}</span>`)
    } else {
      hint.innerText = text
    }
  }

  function handleEdge() {
    indX = (mouseX > w - hint.offsetWidth + shiftX) ? hint.offsetWidth - shiftX : 0
    indY = (mouseY > h - hint.offsetHeight - shiftY) ? hint.offsetHeight * 2 + shiftY : 0
  }

  function easeTo() {
    const hintBounds = hint.getBoundingClientRect()
    const dX = mouseX - (hintBounds.left + shiftX + indX)
    const dY = mouseY - (hintBounds.top - shiftY + indY)

    posX += dX * ease
    posY += dY * ease
  }

  function update() {
    if (!isMobile) {
      easeTo()
      hint.style.transform = `translate3d(${posX}px, ${posY}px, 0)`
      window.requestAnimationFrame(update)
    }
  }

  function setCoords(e) {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  function moveHint() {
    mobileReset = false
    document.onmousemove = setCoords
    update()
  }

  moveHint()
  showHint()

  window.addEventListener('resize', () => {
    isMobile = !window.matchMedia('(hover: hover)').matches
    if (mobileReset && !isMobile) moveHint()
    if (isMobile) {
      window.cancelAnimationFrame(update)
      mobileReset = true
    }
  })
}