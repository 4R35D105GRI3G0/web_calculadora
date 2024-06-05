let display = document.getElementById('display');
let operation = '';
let firstNumber = '';
let secondNumber = '';

function clearDisplay() {
    display.value = '';
    operation = '';
    firstNumber = '';
    secondNumber = '';
}

function appendNumber(number) {
    display.value += number;
}

function setOperation(op) {
    if (display.value !== '') {
        firstNumber = display.value;
        operation = op;
        display.value = '';
    } else {
        alert('Por favor, ingresa un número primero.');
    }
}

function calculate() {
    if (display.value !== '' && firstNumber !== '') {
        secondNumber = display.value;
        let result;
        switch (operation) {
            case '+':
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case '-':
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case '*':
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case '/':
                if (secondNumber == '0') {
                    alert('No se puede dividir por cero.');
                    clearDisplay();
                    return;
                }
                result = parseFloat(firstNumber) / parseFloat(secondNumber);
                break;
            default:
                return;
        }
        display.value = result;
    } else {
        alert('Por favor, completa la operación.');
    }
}
