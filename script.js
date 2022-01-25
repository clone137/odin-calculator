'use strict';

function addNumberToDisplay(number) {
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

function operate(operator, number1, number2) {
  switch (operator) {
    case '+':
      return number1 + number2;
      break;
    case '-':
      return number1 - number2;
      break;
    case '*':
      return number1 * number2;
      break;
    case '/':
      return number1 / number2;
      break;
  }
}

let display = document.querySelector('.display');
let buttonClear = document.querySelector('.buttonClear');
let numberButtons = document.querySelectorAll('.numberButton');
let operatorButtons = document.querySelectorAll('.operatorButton');

buttonClear.addEventListener('click', (e) => {
  display.value = '0';
});

numberButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    addNumberToDisplay(e.target.textContent);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.textContent) {
      case '÷':
        console.log(display.value, e.target.textContent);
        break;
      case 'x':
        console.log(display.value, e.target.textContent);
        break;
      case '-':
        console.log(display.value, e.target.textContent);
        break;
      case '+':
        console.log(display.value, e.target.textContent);
        break;
      case '=':
        console.log(display.value, e.target.textContent);
        break;
    }
  });
});
