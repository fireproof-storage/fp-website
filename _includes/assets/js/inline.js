// Add your inline JS here

const installCommand = document.querySelector('#install-command')
installCommand.addEventListener('click', () => {
  navigator.clipboard
    .writeText(installCommand.textContent.trim())
    .then(() => {
      console.log('Copied to clipboard')
    })
    .catch((err) => {
      console.error('Failed to copy to clipboard', err)
    })
})
Prism.highlightAll()

const form = document.querySelector("#early-access")
const submitButton = document.querySelector("#early-access button")
const input = document.querySelector("#early-access input")
const scriptURL = 'https://script.google.com/macros/s/AKfycbzZzco1OiDSs-Hj7Ru7Rr829KSC32NT4Org9mygIWVSdWnmgLRoNFGR-1P0nxDWblUAYQ/exec'
form.addEventListener('submit', e => {
  submitButton.classList.add('cursor-not-allowed');
  submitButton.classList.remove('fireproof');
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  input.placeholder = "Thanks!"
  input.value = ""
  fetch(scriptURL, { method: 'POST', body: requestBody, mode: 'no-cors' })
})



document.addEventListener('DOMContentLoaded', () => {
  const cubeElement = document.getElementById("cube");
  let isPaused = false;
  function handleClick(event) {
    if (isPaused) {
      cubeElement.style.animationPlayState = "running";
    } else {
      cubeElement.style.animationPlayState = "paused";
    }
    isPaused = !isPaused;
  }

  setInterval(() => {
    cubeElement.removeEventListener('click', handleClick);
    cubeElement.addEventListener('click', handleClick);
  }, 500);

  cubeElement.style.animationPlayState = "running";
})