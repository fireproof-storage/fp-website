'use strict'

// demo app tabs
const tabs = document.querySelector('.hero-app-tabs')

tabs.onclick = (e) => {
  e.stopPropagation()
  const targetTab = e.target.closest('.tab')
  if (!targetTab) return

  tabs.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active')
  })
  targetTab.classList.add('active')
}


// flying hint API:
// 1. add #flying-hint to an empty styled element that will be a hint
// 2. add data-hint attribute to all triggers; value is the hint text
// 3. if trig elements are close to right and bottom edges of the screen
//    add data-edge="true" attribute

const hint = document.getElementById('flying-hint')
const hintTriggers = document.querySelectorAll('[data-hint]')

hint.style.opacity = '0'
hint.style.position = 'absolute'
hint.style.zIndex = '999'
hint.style.transition = 'opacity 0.4s ease'

const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
const h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
const shiftX = 10
const shiftY = 45
const ease = 0.08

let posX = 0
let posY = 0
let mouseX = 0
let mouseY = 0

let indX = 0
let indY = 0

function showHint() {
  hintTriggers.forEach(trigger => {
    trigger.onmouseenter = () => {
      hint.style.opacity = '1'
      hint.innerText = trigger.dataset.hint
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

function handleEdge() {
  indX = (mouseX > w - hint.offsetWidth + shiftX) ? hint.offsetWidth - shiftX : 0
  indY = (mouseY > h - hint.offsetHeight - shiftY) ? hint.offsetHeight * 2 + shiftY : 0
}

function moveHint() {
  function easeTo() {
    const hintBounds = hint.getBoundingClientRect()
    const dX = mouseX - (hintBounds.left + shiftX + indX)
    const dY = mouseY - (hintBounds.top - shiftY + indY)

    posX += dX * ease
    posY += dY * ease
  }

  function update() {
    easeTo()
    hint.style.transform = `translate3d(${posX}px, ${posY}px, 0)`
    window.requestAnimationFrame(update)
  }

  function setCoords(e) {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  document.onmousemove = setCoords
  update()
}

moveHint()
showHint()
