'use strict';

let display = document.querySelector('.display');
let buttonClear = document.querySelector('.buttonClear');
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
    display.value = operate(operator, value, display.value);
    value = display.value;
    operator = 0;
  } else {
    display.value = operate(operator, value, display.value);
    value = display.value;
    operator = newOperator;
    newNumber = true;
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

buttonClear.addEventListener('click', (e) => {
  display.value = '0';
  value = 0;
  operator = 0;
  newNumber = true;
});

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
  'keypress',
  (event) => {
    console.log(event.key);
    switch (event.key) {
      case '0':
        addNumberToDisplay(0);
        break;
      case '1':
        addNumberToDisplay(1);
        break;
      case '2':
        addNumberToDisplay(2);
        break;
      case '3':
        addNumberToDisplay(3);
        break;
      case '4':
        addNumberToDisplay(4);
        break;
      case '5':
        addNumberToDisplay(5);
        break;
      case '6':
        addNumberToDisplay(6);
        break;
      case '7':
        addNumberToDisplay(7);
        break;
      case '8':
        addNumberToDisplay(8);
        break;
      case '9':
        addNumberToDisplay(9);
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
      case '=':
      case 'Enter':
        dealWithOperatorButtons('=');
        break;
      case 'c':
      case 'C':
        display.value = '0';
        value = 0;
        operator = 0;
        newNumber = true;
        break;
    }
  },
  false
);
