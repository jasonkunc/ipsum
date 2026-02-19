// Vegan Ipsum Generator - Main Application Script
// This file handles all the UI interactions, text generation, and user experience

// DOM element references for UI interaction
// These are cached at startup for better performance
const paragraphCountInput = document.getElementById('paragraphCount');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const generatedText = document.getElementById('generatedText');
const outputSection = document.querySelector('.output-section');
const notification = document.getElementById('notification');

/**
 * Generates vegan ipsum text with random word counts and specified paragraph count
 * Each paragraph will have a random number of words between 10-100
 * @param {number} paragraphCount - Number of paragraphs to generate
 * @returns {string} Generated ipsum text with proper formatting
 */
function generateVeganIpsum(paragraphCount) {
    const paragraphs = [];
    
    // Generate each paragraph with random word count
    for (let i = 0; i < paragraphCount; i++) {
        // Random word count between 10-100 words per paragraph for variety
        const wordCount = Math.floor(Math.random() * 91) + 10;
        const words = getRandomWords(wordCount);
        const paragraph = words.join(' ').toLowerCase();
        // Capitalize first letter and add period for proper sentence formatting
        const formattedParagraph = paragraph.charAt(0).toUpperCase() + paragraph.slice(1) + '.';
        paragraphs.push(formattedParagraph);
    }
    
    // Join paragraphs with double line breaks
    return paragraphs.join('\n\n');
}

/**
 * Displays generated text in the output area
 * Shows the output section and copy button when text is ready
 * @param {string} text - Text to display
 */
function displayGeneratedText(text) {
    generatedText.textContent = text;
    // Show the output section and copy button
    outputSection.classList.remove('hidden');
    copyBtn.classList.remove('hidden');
}

/**
 * Copies text to clipboard and shows success notification
 * Uses modern Clipboard API with fallback for older browsers
 * @param {string} text - Text to copy
 */
function copyToClipboard(text) {
    // Use modern Clipboard API first
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Text copied to clipboard!');
    }).catch(err => {
        // Fallback for older browsers that don't support Clipboard API
        console.error('Failed to copy:', err);
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showNotification('Text copied to clipboard!');
    });
}

/**
 * Shows a temporary notification message to the user
 * Auto-hides after 3 seconds
 * @param {string} message - Message to display
 */
function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('show');
    
    // Auto-hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

/**
 * Validates input values to ensure they're within acceptable ranges
 * Shows error notification if validation fails
 * @param {number} paragraphCount - Paragraph count to validate
 * @returns {boolean} True if valid, false otherwise
 */
function validateInputs(paragraphCount) {
    if (paragraphCount < 1 || paragraphCount > 20) {
        showNotification('Paragraph count must be between 1 and 20');
        return false;
    }
    
    return true;
}


/**
 * Handles generate button click
 * Validates input, generates text, and displays it
 */
function handleGenerate() {
    const paragraphCount = parseInt(paragraphCountInput.value);
    
    // Validate input before generating
    if (!validateInputs(paragraphCount)) {
        return;
    }
    
    // Generate and display the ipsum text
    const ipsumText = generateVeganIpsum(paragraphCount);
    displayGeneratedText(ipsumText);
}

/**
 * Handles copy button click
 * Copies the generated text to clipboard
 */
function handleCopy() {
    const text = generatedText.textContent;
    if (text) {
        copyToClipboard(text);
    }
}

/**
 * Handles input validation on change
 * Ensures values stay within acceptable ranges in real-time
 */
function handleInputChange() {
    const paragraphCount = parseInt(paragraphCountInput.value);
    
    // Ensure values are within bounds
    if (paragraphCount < 1) paragraphCountInput.value = 1;
    if (paragraphCount > 20) paragraphCountInput.value = 20;
}


/**
 * Handles keyboard shortcuts for better user experience
 * Ctrl/Cmd + Enter: Generate new ipsum
 * Ctrl/Cmd + C: Copy text (when not in input field)
 * @param {KeyboardEvent} e - Keyboard event
 */
function handleKeyboardShortcuts(e) {
    // Ctrl/Cmd + Enter to generate
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleGenerate();
    }
    
    // Ctrl/Cmd + C to copy (only when not typing in input)
    if ((e.ctrlKey || e.metaKey) && e.key === 'c' && 
        document.activeElement !== paragraphCountInput) {
        e.preventDefault();
        handleCopy();
    }
}

/**
 * Generates a random hex color for background
 * @returns {string} Random hex color (e.g., '#FF5733')
 */
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**
 * Sets a random background color for the page
 * Automatically adjusts text color for readability based on background brightness
 * Uses luminance formula to determine if background is light or dark
 */
function setRandomBackground() {
    const randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor;
    
    // Calculate brightness using standard luminance formula
    const rgb = parseInt(randomColor.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    
    // Set text color based on background brightness for contrast
    if (brightness < 128) {
        document.body.style.color = '#ffffff'; // White text for dark backgrounds
    } else {
        document.body.style.color = '#000000'; // Black text for light backgrounds
    }
}

/**
 * Initialize the application
 * Sets up event listeners, random background, and prepares the UI
 */
function initializeApp() {
    // Set random background color on page load for visual variety
    setRandomBackground();
    
    // Add event listeners for user interactions
    generateBtn.addEventListener('click', handleGenerate);
    copyBtn.addEventListener('click', handleCopy);
    paragraphCountInput.addEventListener('input', handleInputChange);
    
    // Add keyboard shortcuts for power users
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Add input validation on blur for better UX
    paragraphCountInput.addEventListener('blur', handleInputChange);
}

// Initialize app when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApp);
