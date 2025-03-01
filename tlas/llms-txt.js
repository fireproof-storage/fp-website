'use strict'

{
  document.addEventListener('DOMContentLoaded', () => {
    const llmTxtUrl = "https://use-fireproof.com/llms.txt";
    const llmMiniTxtUrl = "https://use-fireproof.com/llms-mini.txt";

    const llmTxtDisplay = document.getElementById('llm-txt');
    const llmTxtButton = document.getElementById('copy-llm-txt');
    const buttonText = llmTxtButton.innerText;
    const buttonContent = llmTxtButton.innerHTML;

    const fetchMiniAndDisplay = async () => {
      try {
        const response = await fetch(llmMiniTxtUrl);
        const miniText = await response.text();
        // Replace newlines with spaces and ensure max one space in a row
        const formattedText = miniText.replace(/\n/g, ' ').replace(/\s+/g, ' ');
        llmTxtDisplay.innerText = formattedText;
      } catch (error) {
        console.error('Error fetching mini text:', error.message);
      }
    }

    const setClipboard = async () => {
      try {
        const response = await fetch(llmTxtUrl);
        const fullText = await response.text();
        await navigator.clipboard.writeText(fullText);
        
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

    // On page load, fetch mini text and display it
    fetchMiniAndDisplay();
  })
}