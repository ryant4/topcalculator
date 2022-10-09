let inputString = '';
let displayValue = 0;
let valueX = 0;
let valueY = 0;
let operatorValue = 'none';
let readyForEqual = false;

function addition(x, y) {
    valueX = x + y;
}

function subtraction(x, y) {
    valueX = x - y;
}

function division (x, y) {
    if (y === 0) {
        valueX = NaN;
        return;
    }
    valueX = x / y;
}

function multiplication (x ,y) {
    valueX = x * y;
}

// Operate function
function operate (operatorFunction, x, y) {
    if (operatorFunction === "add") {
        addition(x, y);
    }
    else if (operatorFunction === "subtract") {
        subtraction(x, y);
    }
    else if (operatorFunction === "multiply") {
        multiplication(x, y)
    }
    else if (operatorFunction === "divide") {
        division(x, y);
    }

}

// Populate display function
function updateDisplay(number) {
    displayValue = parseFloat(number);
    const calcDisplay = document.getElementById("display");
    calcDisplay.innerHTML = displayValue;
}

// Buttons 1-9 add to display string
const takeInput = document.querySelectorAll('.numberbutton');
for (let i = 0; i < takeInput.length; i++) {
    takeInput[i].addEventListener('click', function (e) {
        inputString += e.target.value;
        updateDisplay(inputString);
    });
}

// Operator buttons
const operatorButton = document.querySelectorAll('.operatorbutton');
for (let i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener('click', function (e) {
        
        if (operatorValue === 'none') {
            // Set x to current display, display x, wait for y
            operatorValue = (e.target.value);
            valueX = displayValue;
        }
        else {
            // Otherwise, set y to current display, operate
            valueY = displayValue;
            operate(operatorValue, valueX, valueY);
            operatorValue = (e.target.value);
        }
        updateDisplay(valueX);
        inputString = '';
        readyForEqual = true;
    })
}

// Equal Button to call operate function
const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', function() {
    if (readyForEqual === false) {
        return;
    }
    else {
        valueY = displayValue;
        operate(operatorValue, valueX, valueY);
        updateDisplay(valueX);
        inputString = '';
        operatorValue = 'equals';
    }
})

// Clear Button to reset everything
const clearButton = document.querySelector('#clearbutton');
clearButton.addEventListener('click', () => {
    inputString = '';
    displayValue = 0;
    valueX = 0;
    valueY = 0;
    operatorValue = 'none';
    updateDisplay(0);
    readyForEqual = false;
})