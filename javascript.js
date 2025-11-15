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

function pressedNumber(number) {
    display.textContent += number;
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
    }
}

function setupButtons() {
    let buttons = document.querySelector("#buttons");
    buttons.addEventListener("click", (e) => {
        dispatchPressedButton(e.target.textContent);
    });
}

let display = document.querySelector("#display");
