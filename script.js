start();



function start() {
    const items = document.querySelectorAll('.item');
    const input = document.querySelector('#input');
    input.value = '';
    let dispValue = '', operation = '';
    let updateDispValue = true, resetNext = false, cannotEquals = true;
    items.forEach(dispToInput);

    document.addEventListener('keydown', scanKey);

    function scanKey(event) {
        const keyCode = event.keyCode;
        const keyToPress = document.querySelector(`[data-key="${keyCode}"]`);
        keyToPress.dispKeyPress = dispKeyPress;
        keyToPress.dispKeyPress();
    }

    function dispKeyPress() {
        if (this.textContent === 'C' || input.value === "bruh") {
            input.value = '';
            updateDispValue = true;
            resetNext = false;
            cannotEquals = true;
        } else if (this.textContent === '.' && input.value.indexOf('.') > -1) {}
        else if (this.classList.contains('operator')) {
            if (this.textContent === '=') {
                if (!cannotEquals) {
                    input.value = operate(operation, Number(dispValue), Number(input.value));
                    dispValue = input.value;
                    updateDispValue = true;
                }
            }
            else if (!updateDispValue) {
                dispValue = operate(operation, Number(dispValue), Number(input.value));
                input.value = dispValue;
                resetNext = true;
                operation = this.textContent;
            } else {
                input.value = '';
                operation = this.textContent;
                updateDispValue = false;
            }
            cannotEquals = false;
        } else {
            if (resetNext) {
                input.value = '';
                resetNext = false;
            }
            input.value = input.value + this.textContent;
            if(updateDispValue) dispValue = input.value;
        }
    }

    function dispToInput(el) {
        el.addEventListener('click', dispKeyPress);
    }
}

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
    if (b === 0) return "bruh";
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') return add(a, b);
    if (operator === '-') return subtract(a, b);
    if (operator === 'x') return multiply(a, b);
    if (operator === '/') return divide(a, b);
}

