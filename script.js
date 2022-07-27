const items = document.querySelectorAll('.item');
const input = document.querySelector('#input');
let dispValue = '';
items.forEach(dispToInput);

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

function operate(operator, a, b) {
    if (operator === '+') return add(a, b);
    if (operator === '-') return subtract(a, b);
    if (operator === '*') return multiply(a, b);
    if (operator === '/') return divide(a, b);
}

function dispToInput(el) {
    el.addEventListener('click', function() {
        input.value = input.value + this.textContent;
        dispValue = input.value;
    });
}