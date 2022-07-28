start();

document.addEventListener('keydown', );

function scanKey(event) {

}

function start() {
    const items = document.querySelectorAll('.item');
    const input = document.querySelector('#input');
    input.value = '';
    let dispValue = '', operation = '';
    let updateDispValue = true, resetNext = false, cannotEquals = true;
    items.forEach(dispToInput);

    function dispToInput(el) {
        el.addEventListener('click', function() {
            if (el.textContent === 'C' || input.value === "bruh") {
                input.value = '';
                updateDispValue = true;
                resetNext = false;
                cannotEquals = true;
            } else if (el.textContent === '.' && input.value.indexOf('.') > -1) {}
            else if (el.classList.contains('operator')) {
                if (el.textContent === '=') {
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
                    operation = el.textContent;
                } else {
                    input.value = '';
                    operation = el.textContent;
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
        });
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

