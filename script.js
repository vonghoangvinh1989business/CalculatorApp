// declare variables
let display = document.querySelector("#display");
let number1 = "";
let number2 = "";
let whichNumber = "";
let operator = null;
let previousAction = null;

// declare const variables which will not change their values
const SUBTRACT = "subtract";
const ADD = "add";
const MULTIPLY = "multiply";
const DIVIDE = "divide";
const NUMBER_STATE = "number";
const NUMBER_1 = "number1";
const NUMBER_2 = "number2";

// function used to display value to display screen of calculation
const displayScreen = (input) => (display.innerHTML = input.toString().trim());

const addNumber = (number) => {
  if (!operator) {
    number1 += number;
    displayScreen(number1);
    whichNumber = NUMBER_1;
  } else {
    number2 += number;
    displayScreen(number2);
    whichNumber = NUMBER_2;
  }

  previousAction = NUMBER_STATE;
};

// function is used to remove last character of number based on which number passed in
const removeLastNumber = (whichNumber) => {
  if (whichNumber === NUMBER_1 && number1.length > 0) {
    number1 = number1.slice(0, -1);
    displayScreen(number1);
  }

  if (whichNumber === NUMBER_2 && number2.length > 0) {
    number2 = number2.slice(0, -1);
    displayScreen(number2);
  }
};

// function del to handle 'DEL' operator
const del = () => {
  if (whichNumber) {
    removeLastNumber(whichNumber);
  }
};

// function add to handle '+' operator
const add = () => {
  if (previousAction === NUMBER_STATE) {
    calculateResult();
  }

  operator = ADD;
  previousAction = ADD;
};

// function subtract to handle '-' operator
const subtract = () => {
  if (previousAction === NUMBER_STATE) {
    calculateResult();
  }

  operator = SUBTRACT;
  previousAction = SUBTRACT;
};

// function multiply to handle '*' operator
const multiply = () => {
  if (previousAction === NUMBER_STATE) {
    calculateResult();
  }

  operator = MULTIPLY;
  previousAction = MULTIPLY;
};

// function divide to handle '/' operator
const divide = () => {
  if (previousAction === NUMBER_STATE) {
    calculateResult();
  }

  operator = DIVIDE;
  previousAction = DIVIDE;
};

// function generate result of two number based on types of operator
const calculateBasedOnOperator = (operator) => {
  number1 = parseFloat(number1);
  number2 = parseFloat(number2);

  let result = "";
  switch (operator) {
    case ADD:
      result = number1 + number2;
      break;
    case SUBTRACT:
      result = number1 - number2;
      break;
    case MULTIPLY:
      result = number1 * number2;
      break;
    case DIVIDE:
      result = number1 / number2;
      break;
    default:
      break;
  }

  displayScreen(result);
  number1 = result;
  number2 = "";
};

// function to calculate result
const calculateResult = () => {
  if (number2) {
    calculateBasedOnOperator(operator);
  }

  if (display.innerHTML === "NaN") {
    number1 = "";
    number2 = "";
    operator = null;
  }
};

const equal = () => {
  calculateResult();
  operator = null;
  number1 = "";
  number2 = "";
};

const clearCalculation = () => {
  // reset all variables to beginning state
  number1 = "";
  number2 = "";
  whichNumber = "";
  operator = null;
  displayScreen("");
};
