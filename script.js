document.addEventListener('DOMContentLoaded', () => {
    const shapeSelect = document.getElementById('shape');
    const inputsContainer = document.getElementById('inputs');
    const calculateButton = document.getElementById('calculate-btn');
    const resultDisplay = document.getElementById('result');

    const shapeInputs = {
        rectangle: ['Length', 'Width'],
        square: ['Side'],
        circle: ['Radius'],
        triangle: ['Base', 'Height']
    };

    shapeSelect.addEventListener('change', updateInputs);
    calculateButton.addEventListener('click', calculateResults);

    function updateInputs() {
        const shape = shapeSelect.value;
        inputsContainer.innerHTML = ''; // Clear previous inputs

        shapeInputs[shape].forEach(input => {
            const inputField = document.createElement('input');
            inputField.type = 'number';
            inputField.id = input.toLowerCase();
            inputField.placeholder = `${input} (in meters)`;
            inputsContainer.appendChild(inputField);
        });
    }

    function calculateResults() {
        const shape = shapeSelect.value;
        let area = 0, perimeter = 0;

        if (shape === 'rectangle') {
            const length = parseFloat(document.getElementById('length').value);
            const width = parseFloat(document.getElementById('width').value);
            area = length * width;
            perimeter = 2 * (length + width);
        } else if (shape === 'square') {
            const side = parseFloat(document.getElementById('side').value);
            area = side * side;
            perimeter = 4 * side;
        } else if (shape === 'circle') {
            const radius = parseFloat(document.getElementById('radius').value);
            area = Math.PI * radius * radius;
            perimeter = 2 * Math.PI * radius;
        } else if (shape === 'triangle') {
            const base = parseFloat(document.getElementById('base').value);
            const height = parseFloat(document.getElementById('height').value);
            area = 0.5 * base * height;
            // Assuming an equilateral triangle for simplicity
            perimeter = 3 * base; 
        }

        // Display result with units
        if (!isNaN(area) && !isNaN(perimeter)) {
            resultDisplay.innerHTML = `
                <strong>Area:</strong> ${area.toFixed(2)} m² <br>
                <strong>Perimeter:</strong> ${perimeter.toFixed(2)} m
            `;
        } else {
            resultDisplay.textContent = 'Please enter valid numbers for all inputs.';
        }
    }

    // Initialize the inputs on page load
    updateInputs();
});
