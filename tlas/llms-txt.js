'use strict'

{
  document.addEventListener('DOMContentLoaded', () => {

    const llmTxtDisplay = document.getElementById('llm-txt');
    const llmTxtButton = document.getElementById('copy-llm-txt');
    const buttonText = llmTxtButton.innerText;
    let llmTxt = '';

    const fetchLlmTxt = async () => {
      const llmTxtUrl = "https://use-fireproof.com/llms.txt";
      try {
        const response = await fetch(llmTxtUrl);
        llmTxt = await response.text();
      } catch (error) {
        console.error(error.message);
      }
    }

    const setClipboard = async () => {
      try {
        await navigator.clipboard.writeText(llmTxt);
        const confirmationResponse = await fetch('./llms-txt-copied.json');
        const confirmationMessage = await confirmationResponse.json();
        llmTxtButton.innerText = confirmationMessage.message;
        setTimeout(() => {
          llmTxtButton.innerText = buttonText;
        }, 2000)
      } catch(e) {
        console.error(e.message);
      }
    }

    ['scroll', 'mousedown'].forEach((eventType) => {
      llmTxtDisplay.addEventListener(eventType, (e) => { e.preventDefault() })
    });

    llmTxtButton.addEventListener('click', (e) => {
      setClipboard();
    });

    fetchLlmTxt();
  })
}