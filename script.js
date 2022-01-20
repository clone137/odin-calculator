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
