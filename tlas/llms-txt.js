'use strict'

{
  document.addEventListener('DOMContentLoaded', () => {
    let llmTxt = "";
    let llmMiniTxt = "";
    const llmTxtUrl = "https://use-fireproof.com/llms.txt";
    const llmMiniTxtUrl = "https://use-fireproof.com/llms-mini.txt";

    const llmTxtDisplay = document.getElementById('llm-txt');
    const llmTxtButton = document.getElementById('copy-llm-txt');
    const buttonText = llmTxtButton.innerText;
    const buttonContent = llmTxtButton.innerHTML;

    const fetchMiniAndDisplay = async () => {
        await fetchMini();
        displayMini(llmMiniTxt)
    }

    const fetchMedium = async () => {
      try {
        const response = await fetch(llmTxtUrl);
        llmTxt = await response.text();
        // Replace newlines with spaces and ensure max one space in a row
      } catch (error) {
        console.error('Error fetching mini text:', error.message);
      }
    }

    const fetchMini = async () => {
      try {
        const response = await fetch(llmMiniTxtUrl);
        llmMiniTxt = await response.text();
      } catch (error) {
        console.error('Error fetching mini text:', error.message);
      }
    }

    const displayMini = (miniText) => {
        const formattedText = miniText.replace(/\n/g, ' ').replace(/\s+/g, ' ');
        llmTxtDisplay.innerText = formattedText;
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

    // On page load, fetch mini text and display it
    fetchMiniAndDisplay();
    fetchMedium();
  })
}