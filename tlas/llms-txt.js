'use strict'

{
  document.addEventListener('DOMContentLoaded', () => {
    let llmTxt = "";
    const llmTxtUrl = "https://use-fireproof.com/llms.txt";
    const llmTxtDisplay = document.getElementById('llm-txt');
    const llmTxtButton = document.getElementById('copy-llm-txt');
    const buttonContent = llmTxtButton.innerHTML;

    const fetchMedium = async () => {
      try {
        const response = await fetch(llmTxtUrl);
        llmTxt = await response.text();
        // Replace newlines with spaces and ensure max one space in a row
      } catch (error) {
        console.error('Error fetching llms.txt:', error.message);
      }
    }

    const setClipboard = async () => {
      try {
        await navigator.clipboard.writeText(llmTxt);
        llmTxtButton.innerText = "Copied llms.txt to Clipboard!";
        setTimeout(() => {
          llmTxtButton.innerHTML = buttonContent;
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

    // On page load, fetch llm.txt
    (async () => {
      await fetchMedium();
    })();
  })
}