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

    const setClipboard = () => {
      navigator.clipboard.writeText(llmTxt);
      llmTxtButton.innerText = "Copied!"
      setTimeout(() => {
        llmTxtButton.innerText = buttonText;
      }, 2000)
    }

    ['scroll', 'mousedown'].forEach((eventType) => {
      llmTxtDisplay.addEventListener(eventType, (e) => { e.preventDefault() })
    });

    llmTxtButton.addEventListener('click', (e) => {
      fetch('./llms-txt-copied.json'); // fire and forget for rough analytics
      setClipboard();
    });

    fetchLlmTxt();
  })
}