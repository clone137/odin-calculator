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
    if (operator === 0) {
      value = display.value;
      operator = e.target.textContent;
      newNumber = true;
    } else if (e.target.textContent === '=') {
      display.value = operate(operator, value, display.value);
      value = display.value;
      operator = 0;
    } else {
      display.value = operate(operator, value, display.value);
      value = display.value;
      operator = e.target.textContent;
      newNumber = true;
    }
  });
});
