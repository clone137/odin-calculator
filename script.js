'use strict';

let display = document.querySelector('.display');
let buttonClear = document.querySelector('.buttonClear');
let buttonBackspace = document.querySelector('.buttonBackspace');
let numberButtons = document.querySelectorAll('.numberButton');
let operatorButtons = document.querySelectorAll('.operatorButton');

let value = 0;
let newNumber = false;
let operator = 0;

function operate(operator, firstNumber, secondNumber) {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
      break;
    case '-':
      return firstNumber - secondNumber;
      break;
    case 'x':
      return firstNumber * secondNumber;
      break;
    case '÷':
      return firstNumber / secondNumber;
      break;
  }
}

function dealWithOperatorButtons(newOperator) {
  if (operator === 0 && newOperator === '=') {
    return;
  } else if (operator === 0 && newOperator !== '=') {
    value = display.value;
    operator = newOperator;
    newNumber = true;
  } else if (newOperator === '=') {
    value = operate(operator, value, display.value);
    value = display.value = Number.isInteger(value)
      ? value
      : parseFloat(value).toFixed(2);
    operator = 0;
    newNumber = true;
  } else {
    value = operate(operator, value, display.value);
    value = display.value = Number.isInteger(value)
      ? value
      : parseFloat(value).toFixed(2);
    operator = newOperator;
    newNumber = true;
  }
}

function doClear() {
  display.value = '0';
  value = 0;
  operator = 0;
  newNumber = true;
}

function doBackspace() {
  if (display.value.length > 1) {
    value = display.value.slice(0, -1);
    display.value = value;
  } else if (display.value.length === 1) {
    value = display.value = 0;
  }
}

function addNumberToDisplay(number) {
  if (newNumber) {
    display.value = '0';
    newNumber = false;
  }
  const currentDisplayValue = display.value;
  if (currentDisplayValue === '0') {
    display.value =
      number === '.'
        ? (display.value = currentDisplayValue + '' + number)
        : (display.value = number);
  } else {
    if (number === '.') {
      if (currentDisplayValue.indexOf('.') === -1) {
        display.value = currentDisplayValue + '' + number;
      }
    } else {
      display.value = currentDisplayValue + '' + number;
    }
  }
}

buttonClear.addEventListener('click', doClear);
buttonBackspace.addEventListener('click', doBackspace);

numberButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    addNumberToDisplay(e.target.textContent);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    dealWithOperatorButtons(e.target.textContent);
  });
});

// add an event listener for keypresses
document.addEventListener(
  'keydown',
  (event) => {
    switch (event.key) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        addNumberToDisplay(event.key);
        break;
      case '=':
      case 'Enter':
        dealWithOperatorButtons('=');
        break;
      case '+':
        dealWithOperatorButtons('+');
        break;
      case '-':
        dealWithOperatorButtons('-');
        break;
      case '*':
        dealWithOperatorButtons('x');
        break;
      case '/':
        dealWithOperatorButtons('÷');
        break;
      case 'c':
      case 'C':
        doClear();
        break;
      case 'Backspace':
        doBackspace();
        break;
    }
  },
  false
);
