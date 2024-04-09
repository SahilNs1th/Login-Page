let displayValue = '0';

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    document.getElementById('display').innerText = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').innerText = displayValue;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').innerText = displayValue;
    }
}
