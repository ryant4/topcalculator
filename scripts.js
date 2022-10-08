let inputString = '';
let x = 0;
let y = 0;
let operatorValue = '';
let workingTotal = 0;

function addition(x, y) {
    workingTotal = x + y;
}

function subtraction(x, y) {
    workingTotal = x - y;
}


function division (x, y) {
    if (y === 0) {
        workingTotal = NaN;
        return;
    }
    workingTotal = x / y;
}


function multiplication (x ,y) {
    workingTotal = x * y;
}


// Operate function
function operate (operatorFunction, numOne, numTwo) {
    if (operatorFunction === "add") {
        addition(numOne, numTwo);
    }
    else if (operatorFunction === "subtract") {
        subtraction(numOne, numTwo);
    }
    else if (operatorFunction === "multiply") {
        multiplication(numOne, numTwo)
    }
    else if (operatorFunction === "divide") {
        division(numOne, numTwo);
    }
    updateDisplay(workingTotal);
    inputString = '';

}


// Populate display function
function updateDisplay(number) {
    displayValue = parseInt(number);
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

// Operator buttons call operate function
const operatorButton = document.querySelectorAll('.operatorbutton');

for (let i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener('click', function (e) {
        operatorValue = (e.target.value);
        x = displayValue;
        inputString = '';
    })
}

// Equal Button
const equalButton =  document.querySelector('#equals');
equalButton.addEventListener('click', function() {
    y = displayValue;
    operate(operatorValue, x, y);

})

// Clear Button to reset everything
const clearButton = document.querySelector('#clearbutton');
clearButton.addEventListener('click', () => {
    inputString = '';
    x = 0;
    y = 0;
    operatorValue = '';
    workingTotal = 0;
    updateDisplay(0);
})