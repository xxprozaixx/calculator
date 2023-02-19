let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
const clear = document.querySelector('.reset');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
let shouldReset = true;
let point = document.querySelector('.point');
let currentScreenOperation = document.getElementById('currentScreenOperation');
let lastScreenOperation = document.getElementById('lastScreenOperation');
const numbers = document.querySelectorAll('.number');

numbers.forEach(numBtn => numBtn.addEventListener('click', () => appendNumber(numBtn.textContent)));
point.addEventListener('click', appendPoint);
clear.addEventListener('click', clearScreen);
operators.forEach(operator => operator.addEventListener('click',
function operations()
{
    if (currentOperation !== null) evaluate()
    firstOperand = currentScreenOperation.textContent;
    currentOperation = operator.textContent;
    lastScreenOperation.textContent = `${firstOperand} ${currentOperation}`;
    shouldReset = true;
}
));

equal.addEventListener('click', () => evaluate());

// Append number to Screen
function appendNumber(number)
{
    if(currentScreenOperation.textContent === '0' || shouldReset) 
    {
        resetScreen();
    }
    currentScreenOperation.textContent += number; 
}

// Append poitn to Screen
function appendPoint() 
{
    if (shouldReset) resetScreen()
    if (currentScreenOperation.textContent === '')
    currentScreenOperation.textContent = '0'
    if (currentScreenOperation.textContent.includes('.')) return
    currentScreenOperation.textContent += '.'
  }

// Reset screen
function resetScreen()
{
    currentScreenOperation.textContent = '';
    shouldReset = false;
}

function clearScreen()
{
    currentScreenOperation.textContent = '';
    lastScreenOperation.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
}

// Evaluate
function evaluate()
{

    if (currentOperation === null || shouldReset) return
    if (currentOperation === '÷' && currentScreenOperation.textContent === '0') {
      alert("You can't divide by 0!")
      return
    }
    secondOperand = currentScreenOperation.textContent

    currentScreenOperation.textContent = roundResult(
      operate(currentOperation, firstOperand, secondOperand)
    )
    lastScreenOperation.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null
}

// Round Result
function roundResult(number) {
    return Math.round(number * 1000) / 1000
  }

// Calculator function
function add(x,y)
{
    return x + y;
}

function subtract(x,y)
{
    return x - y;
}

function multiply(x,y)
{
    return x * y;
}

function divide(x,y)
{
    return x / y;
}

function modulus(x,y)
{
  return x % y;
}

function operate(operator, a, b) 
{
    a = Number(a)
    b = Number(b)
    switch (operator) {
      case '+':
        return add(a, b)
      case '-':
        return subtract(a, b)
      case 'x':
        return multiply(a, b)
      case '÷':
        if (b === 0) return null
        else return divide(a, b)
        case '%':
            return  modulus(a,b);
      default:
        return null
    }
}