// Function to change text content dynamically
function changeText() {
    const textElement = document.getElementById('dynamicText');
    const texts = [
        'Text has been changed!',
        'Click again for another message!',
        'JavaScript is fun!',
        'DOM manipulation is awesome!'
    ];
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    textElement.textContent = randomText;
}

// Function to modify CSS styles
function changeStyle() {
    const element = document.getElementById('styleText');
    element.classList.toggle('highlight');
}

// Function to add or remove elements
function toggleElement() {
    const container = document.getElementById('elementContainer');
    const existingElement = container.querySelector('.dynamic-element');
    
    if (existingElement) {
        container.removeChild(existingElement);
    } else {
        const newElement = document.createElement('div');
        newElement.className = 'dynamic-element';
        newElement.textContent = 'This is a dynamically added element!';
        newElement.style.padding = '10px';
        newElement.style.backgroundColor = '#e0e0e0';
        newElement.style.marginTop = '10px';
        container.appendChild(newElement);
    }
}