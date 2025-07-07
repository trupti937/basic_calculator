const display = document.getElementById('display');
const calculator = document.getElementById('calculator');
const body = document.body;

// Add value to the display
function appendValue(value) {
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Clear the entire display
function clearDisplay() {
    display.value = "0";
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
}

// Calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Toggle Dark Mode
function toggleDarkMode() {
    body.classList.toggle('dark');
    calculator.classList.toggle('dark');
}

