Prism.highlightAll()

// const installCommand = document.querySelector('#install-command')
// installCommand.addEventListener('click', () => {
//   navigator.clipboard
//     .writeText(installCommand.textContent.trim())
//     .then(() => {
//       console.log('Copied to clipboard')
//     })
//     .catch(err => {
//       console.error('Failed to copy to clipboard', err)
//     })
// })

const form = document.querySelector('#early-access')
if (form) {
  const submitButton = document.querySelector('#early-access button')
  const input = document.querySelector('#early-access input')
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbzZzco1OiDSs-Hj7Ru7Rr829KSC32NT4Org9mygIWVSdWnmgLRoNFGR-1P0nxDWblUAYQ/exec'
  form.addEventListener('submit', e => {
    submitButton.classList.add('cursor-not-allowed')
    submitButton.classList.remove('fireproof')
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    input.placeholder = 'Thanks!'
    input.value = ''
    fetch(scriptURL, { method: 'POST', body: requestBody, mode: 'no-cors' })
  })
}

document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('#tabList li')
  const contentPanels = document.querySelectorAll('#tabContent article')

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      // Deactivate all tabs
      tabs.forEach(t => t.classList.remove('selected'))
      contentPanels.forEach(panel => panel.classList.remove('active'))

      // Activate clicked tab
      this.classList.add('selected')
      const id = this.id.replace('Tab', 'Content')
      document.getElementById(id).classList.add('active')
    })
  })

  const ftabs = document.querySelectorAll('#featureTabList li')
  const fcontentPanels = document.querySelectorAll('#featureTabContent article')

  ftabs.forEach(tab => {
    tab.addEventListener('click', function () {
      // Deactivate all tabs
      ftabs.forEach(t => t.classList.remove('selected'))
      fcontentPanels.forEach(panel => panel.classList.remove('active'))

      // Activate clicked tab
      this.classList.add('selected')
      const id = this.id.replace('Tab', 'Content')
      document.getElementById(id).classList.add('active')
    })
  })

  const tm = document.querySelector('#trademark')
  // Apply echo effect to tm
  if (tm) {
    applyEchoEffect(tm, 5)
  }
})

function applyEchoEffect(element, echoCount) {
  // Create echoes\
  let echoes = []
  for (let i = 0; i < echoCount; i++) {
    let echo = element.cloneNode()
    echo.style.position = 'absolute'
    echo.style.top = element.offsetTop + 'px'
    echo.style.left = element.offsetLeft + 'px'
    echo.style.transform = 'rotate(-5deg)'
    // echo.style.width = '100%'
    // echo.style.height = '100%'
    echo.style.zIndex = echoCount - 1 - i
    element.parentElement.appendChild(echo)
    echoes.push(echo)
  }

    element.style.opacity = 0

  // Get echoes
  // let echoes = Array.from(element.parentElement.children)

  // Apply effect on mouse move
  element.parentElement.addEventListener('mousemove', function (e) {
    let rect = this.getBoundingClientRect()
    let x = e.clientX - rect.left
    let y = e.clientY - rect.top

    let offsetX = ((x - this.offsetWidth / 2) / this.offsetWidth) * 50
    let offsetY = ((y - this.offsetHeight / 2) / this.offsetHeight) * 50

    echoes.forEach((echo, index) => {
      let scale = 1 - (index + 1) * 0.1
      echo.style.transform = `rotate(-5deg) scale(${scale}) translate(${offsetX}px, ${offsetY}px)`
    })
  })
}
