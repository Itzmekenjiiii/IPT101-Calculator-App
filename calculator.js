// Get the display element
const display = document.getElementById('display');

// Append a number to the display
function appendNumber(number) {
    display.value += number;
}

// Append an operator to the display
function appendOperator(operator) {
    display.value += operator;
}

// Append a decimal point to the display
function appendPoint() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

// Calculate the result
function calculateResult() {
    try {
        let expression = display.value;
        
        // Handle percentage
        expression = expression.replace(/(\d+)%/g, (match, p1) => {
            return `${p1}/100`;
        });

        display.value = eval(expression);
    } catch (e) {
        display.value = 'Error';
    }
}
// Delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Clear the entire display
function clearDisplay() {
    display.value = '';
}
