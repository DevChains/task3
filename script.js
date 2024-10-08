// Select the input screens and the output screen
const containerRight = document.querySelector(".input-screen-right");
const containerLeft = document.querySelector(".input-screen-left");
const outputScreen = document.getElementById("output");

// Define the numbers, operators, and decimal point
const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '<-', '0', '.'];
const calculationButtons = ['+', '-', '/', '*', '^', '%', '=', 'C'];

// Create and append number buttons dynamically
buttons.forEach(value => {
    const button = document.createElement('button');
    button.innerText = value;
    button.classList.add('number-btn');
    containerRight.appendChild(button);
});

// Add event listeners to the number buttons
let displayValue = ''; // Store the value to be shown on the display

document.querySelectorAll(".number-btn").forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault()
        const value = btn.innerText;
        if (value === '<-') {
            // Backspace functionality
            displayValue = displayValue.slice(0, -1);
        } else {
            // Append value to display
            displayValue += value;
        }
        updateDisplay(displayValue);
    });
});

// Create and append operator buttons dynamically
calculationButtons.forEach(value => {
    const button = document.createElement('button');
    button.innerText = value;
    button.classList.add('number-btn');
    containerLeft.appendChild(button);
});

// Add event listeners for calculation buttons
let firstOperand = '';
let operator = '';
let secondOperand = '';

document.querySelectorAll('.input-screen-left button').forEach(opBtn => {
    opBtn.addEventListener('click', function (e) {
        e.preventDefault()
        const value = opBtn.innerText;

        if (value === 'C') {
            // Clear the display and reset everything
            displayValue = '';
            firstOperand = '';
            secondOperand = '';
            operator = '';
            updateDisplay('');
        } else if (value === '=') {
            // Perform calculation when '=' is pressed
            if (firstOperand && operator && displayValue) {
                secondOperand = displayValue;
                displayValue = calculate(firstOperand, operator, secondOperand);
                updateDisplay(displayValue);
                firstOperand = ''; // Reset after calculation
                operator = '';
            }
        } else {
            // Store the first operand and operator
            firstOperand = displayValue;
            operator = value;
            displayValue = ''; // Clear for second operand input
        }
    });
});

// Function to update the output screen
function updateDisplay(value) {
    outputScreen.innerText = value;
}

// Function to perform calculations
function calculate(operand1, operator, operand2) {
    let result;
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '^':
            result = Math.pow(num1, num2);
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            result = "Error";
    }
    return result.toString();
}
