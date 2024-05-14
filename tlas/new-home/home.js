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

