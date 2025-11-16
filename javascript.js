// Basic operation functions.

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// operate() applies the correct operation as dictated by the operator.

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function roundFloats(number) {
    if (!Number.isInteger(number) && !isNaN(number)) {
        return +number.toFixed(1);
    }

    return number;
}

function pressedNumber(number) {
    if (operatorJustPressed) {
            display.textContent = "";
            operatorJustPressed = false;
    }

    if (operand1 === null && currentOperator === null) {
        display.textContent += number;
    } else if (operand1 !== null && currentOperator !== null) {
        display.textContent += number;
    }
}

function pressedOperator(operator) {
    if (operand1 === null && display.textContent !== "" && currentOperator === null) {
        operand1 = +display.textContent;
        currentOperator = operator;
        operatorJustPressed = true;
    } else if (operand1 !== null && display.textContent === "" && currentOperator !== null) {
        currentOperator = operator;
    } else if (operand1 !== null && display.textContent !== "" && currentOperator !== null && !operatorJustPressed) {
        operand1 = operate(currentOperator, operand1, +display.textContent);
        operand1 = roundFloats(operand1);
        currentOperator = operator;
        display.textContent = `${operand1}`;
        operatorJustPressed = true;
    } else if (operand1 !== null && display.textContent !== "" && currentOperator !== null && operatorJustPressed) {
        currentOperator = operator;
    } else if (equalsJustPressed) {
        currentOperator = operator;
        operatorJustPressed = true;
    }
}

function pressedEquals() {
    if (operand1 === null && display.textContent !== "" && operatorJustPressed) {
        currentOperator = null;
        //operatorJustPressed = false;
        operand1 = +display.textContent;
    } else if (operand1 !== null && display.textContent !== "" && currentOperator !== null && !operatorJustPressed) {
        operand1 = operate(currentOperator, operand1, +display.textContent);
        operand1 = roundFloats(operand1);
        display.textContent = `${operand1}`;
        currentOperator = null;
        equalsJustPressed = true;
    }
}

function clear() {
    operand1 = null;
    currentOperator = null;
    operatorJustPressed = false;
    display.textContent = "";
}

function dispatchPressedButton(button) {
    switch (button) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            pressedNumber(button);
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            pressedOperator(button);
            break;
        case "=":
            pressedEquals();
            break;
        case "C":
            clear();
    }
}

function setupButtons() {
    let buttons = document.querySelector("#buttons");
    buttons.addEventListener("click", (e) => {
        dispatchPressedButton(e.target.textContent);
    });
}

let display = document.querySelector("#display");

let operand1 = null;

let currentOperator = null;
let operatorJustPressed = false;

let equalsJustPressed = false;

setupButtons();