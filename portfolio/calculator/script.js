'user strict';

//HTML elements selection
const displayEl = document.querySelector('.display');
const btn0 = document.querySelector('.btn--0');
const btn1 = document.querySelector('.btn--1');
const btn2 = document.querySelector('.btn--2');
const btn3 = document.querySelector('.btn--3');
const btn4 = document.querySelector('.btn--4');
const btn5 = document.querySelector('.btn--5');
const btn6 = document.querySelector('.btn--6');
const btn7 = document.querySelector('.btn--7');
const btn8 = document.querySelector('.btn--8');
const btn9 = document.querySelector('.btn--9');
const btn0Ac = document.querySelector('.btn--ac');
const btnPlusMinus = document.querySelector('.btn--plus-minus');
const btnAdd = document.querySelector('.btn--plus');
const btnSubtract = document.querySelector('.btn--minus');
const btnMultiply = document.querySelector('.btn--multiply');
const btnDivide = document.querySelector('.btn--divide');
const btnEqual = document.querySelector('.btn--equal');
const btnPercentage = document.querySelector('.btn--percent');
const btnDot = document.querySelector('.btn--dot');

// State variable
let dot, arithoperation;
dot = arithSign = false;

//Clear screen
displayEl.value = '';

//function to perform arithmetic operations
const operation = function (sign) {
  if (!arithSign) {
    displayEl.value += sign;
    arithSign = true;
    dot = false;
  } else displayEl.value += '';
};

//function to display digit
const displayDigit = function (digit) {
  displayEl.value += digit;
  arithSign = false;
};

// Digits Button
btn0.addEventListener('click', function () {
  displayDigit('0');
});
btn1.addEventListener('click', function () {
  displayDigit('1');
});
btn2.addEventListener('click', function () {
  displayDigit('2');
});
btn3.addEventListener('click', function () {
  displayDigit('3');
});
btn4.addEventListener('click', function () {
  displayDigit('4');
});
btn5.addEventListener('click', function () {
  displayDigit('5');
});
btn6.addEventListener('click', function () {
  displayDigit('6');
});
btn7.addEventListener('click', function () {
  displayDigit('7');
});
btn8.addEventListener('click', function () {
  displayDigit('8');
});
btn9.addEventListener('click', function () {
  displayDigit('9');
});

//Button clear all
btn0Ac.addEventListener('click', function () {
  displayEl.value = '';
  dot = arithSign = false;
});

//Dot Button
btnDot.addEventListener('click', function () {
  if (!dot) {
    displayEl.value += '.';
    dot = true;
  } else {
    displayEl.value += '';
  }
});

//Plus/Minus Button
btnPlusMinus.addEventListener('click', function () {
  if (Number(displayEl.value)) {
    displayEl.value = String(Number(displayEl.value) * -1);
  }
});

//Percentage Button
btnPercentage.addEventListener('click', function () {
  displayEl.value = String(Number(displayEl.value) / 100);
});

// Arithmetic operations Buttons
btnAdd.addEventListener('click', function () {
  operation('+');
});
btnSubtract.addEventListener('click', function () {
  operation('-');
});
btnMultiply.addEventListener('click', function () {
  operation('*');
});
btnDivide.addEventListener('click', function () {
  operation('/');
});

//Equality Button
btnEqual.addEventListener('click', function () {
  displayEl.value = eval(displayEl.value);
});
