'use strict';

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

let buttonEquals = document.querySelector('.buttonEquals');
let buttonDivide = document.querySelector('.buttonDivide');
let buttonMultiply = document.querySelector('.buttonMultiply');
let buttonSubtract = document.querySelector('.buttonSubtract');
let buttonAdd = document.querySelector('.buttonAdd');
let buttonPoint = document.querySelector('.buttonPoint');

function addNumberToDisplay(number) {
  const currentDisplayValue = display.value;
  console.log(typeof currentDisplayValue);
  if (currentDisplayValue === '0') {
    display.value = number;
  } else {
    display.value = currentDisplayValue + '' + number;
  }
}

buttonClear.addEventListener('click', (e) => {
  display.value = '0';
});

numberButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    addNumberToDisplay(e.target.textContent);
    console.log(e.target.textContent);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target.textContent);
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
