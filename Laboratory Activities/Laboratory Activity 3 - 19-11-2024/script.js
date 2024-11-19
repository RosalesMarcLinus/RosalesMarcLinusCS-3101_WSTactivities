const textInput = document.getElementById('textInput');
const wordCountDisplay = document.getElementById('wordcount');
const sentenceCountDisplay = document.getElementById('sentenceCount');

function updateCounts() {
    const text = textInput.value.trim();
    
    const words = text.split(/\s+/).filter(word => word !== "");
    const wordCount = words.length;

    const sentences = text.split(/[.!?]\s+/).filter(sentence => sentence !== "");
    const sentenceCount = sentences.length;

    wordCountDisplay.textContent = `Words: ${wordCount}`;
    sentenceCountDisplay.textContent = `Sentences: ${sentenceCount}`;
}

textInput.addEventListener('input', updateCounts);
