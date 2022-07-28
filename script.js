const items = document.querySelectorAll('.item');
const input = document.querySelector('#input');
let dispValue = '', operation = '';
let updateDispValue = 1, resetNext = 0;
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
    if (operator === 'x') return multiply(a, b);
    if (operator === '/') return divide(a, b);
}

function dispToInput(el) {
    el.addEventListener('click', function() {
        if (el.classList.contains('operator')) {
            if (el.innerHTML === '=') {
                input.value = operate(operation, Number(dispValue), Number(input.value));
                dispValue = input.value;
                updateDispValue = 1;
            }
            else if (!updateDispValue) {
                dispValue = operate(operation, Number(dispValue), Number(input.value));
                input.value = dispValue;
                resetNext = 1;
                operation = el.textContent;
            } else {
                input.value = '';
                operation = el.textContent;
                updateDispValue = 0;
            }
        } else {
            if (resetNext) {
                input.value = '';
                resetNext = 0;
            }
            input.value = input.value + this.textContent;
            if(updateDispValue) dispValue = input.value;
        }
    });
}


// function dispToInput(el) {
//     el.addEventListener('click', function() {
//         if (el.classList.contains('operator')) {
//             if (el.innerHTML === '=' || operationIsEquals) {
//                 input.value = operate(operation, Number(dispValue), Number(input.value));
//                 dispValue = input.value;
//             }
//             else if (!updateDispValue) {
//                 dispValue = operate(operation, Number(dispValue), Number(input.value));
//                 operationIsEquals = true;
//             } else {
//                 input.value = '';
//                 operation = el.textContent;
//                 updateDispValue = false;
//             }
//         } else {
//             input.value = input.value + this.textContent;
//             if(updateDispValue) dispValue = input.value;
//         }
//     });
// }