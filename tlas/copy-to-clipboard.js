'use strict'

document.querySelectorAll('.copyicon')?.forEach(elem => {
  elem.addEventListener('click', copyToClipBoard)
})

function copyToClipBoard(e) {
  const parentNode = e.currentTarget.parentNode
  const text = parentNode?.querySelector('.copytext')?.innerText
  if (text) {
    navigator.clipboard.writeText(text)
    const copyIcon = parentNode.querySelector('.copyicon')
    const copiedIcon = parentNode.querySelector('.copiedicon')
    copyIcon.style.display = 'none'
    copiedIcon.style.display = 'block'
    setTimeout(() => {
      copyIcon.style.display = 'block'
      copiedIcon.style.display = 'none'
    }, 1500)
  }
}