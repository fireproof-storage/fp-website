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
// #flying-hint – id of a styled flying element 
//  data-hint   – text that hint shows

const hint = document.getElementById('flying-hint')
const hintTriggers = document.querySelectorAll('[data-hint]')

hint.style.opacity = '0'
hint.style.position = 'absolute'
hint.style.zIndex = '999'
hint.style.transition = 'opacity 0.2s ease'

const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
const h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
const indentX = 50
const indentY = 100
const ease = 0.08

let posX = 0
let posY = 0
let mouseX = 0
let mouseY = 0

function showHint() {
  // updating text
  hintTriggers.forEach(trigger => {
    trigger.onmouseenter = () => {
      hint.style.opacity = '1'
      if (trigger.dataset.hint) {
        hint.innerText = trigger.dataset.hint
      }
    }
    trigger.onmouseleave = () => {
      hint.style.opacity = '0'
    }
  })
}

function moveHint() {

  function easeTo() {
    const hintBounds = hint.getBoundingClientRect()

    let indX = 0
    let indY = 0

    if (mouseX > w - hint.offsetWidth / 2 - 16) {
      indX = hint.offsetWidth / 2 + indentX
    }
    if (mouseY > h - hint.offsetHeight - 50) {
      indY = hint.offsetHeight / 2 + indentY
    }

    const dX = mouseX - (hintBounds.left + 16 + indX)
    const dY = mouseY - (hintBounds.top - 50 + indY)

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
