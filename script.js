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

function remainder(x,y)
{
  return x % y;
}

function operate(expression) {
  const expressionArray = expression.split(' ');
  let currentOperator = '';
  let currentResult = 0;
  let currentOperand = 0;

  expressionArray.forEach(element => {
    if (element === '+' || element === '-' || element === 'x' || element === '/' || element === '%') {
      currentOperator = element;
    } else {
      currentOperand = Number(element);
      switch(currentOperator) {
        case '+':
          currentResult += currentOperand;
          break;
        case '-':
          currentResult -= currentOperand;
          break;
        case 'x':
          currentResult *= currentOperand;
          break;
        case '/':
          currentResult /= currentOperand;
          break;
        case '%':
          currentResult = currentResult % currentOperand;
        default:
          currentResult = currentOperand;
          break;
      }
    }
  });

  return currentResult;
}

// Adding Text to screen
const buttons = document.querySelectorAll('.button');
const screen = document.getElementById('screen');

let currentExpression = '';
let currentResult = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;

    switch (buttonValue) {
      case 'AC':
        currentExpression = '';
        currentResult = '';
        screen.innerText = '';
        break;
      case 'C':
        currentExpression = currentExpression.slice(0, -1);
        break;
      case '=':
        if (currentExpression === '') {
          return;
        }
        currentResult = operate(currentExpression);
        break;
      case '+':
      case '-':
      case 'x':
      case '/':
      case '%':
        currentExpression += ` ${buttonValue} `;
        break;
      default:
        currentExpression += buttonValue;
        break;
    }

    // Update screen text
    screen.textContent = `${currentExpression}\n${currentResult}`;
  });
});


// buttons.forEach((button) => 
// {
//   button.addEventListener('click', () => {
//     screen.innerText += button.innerText;
//     screen.style.textAlign = 'right'; // Align text to right
//   // screen.style.padding = '0'; // Add some padding to the text
//   });
// });

// Clear the screen
// let index = 0;
// const reset = document.querySelectorAll('.reset');
// console.log(reset);

// function reset()
// {
//   reset.forEach((resetBtn) =>
//   {
//     resetBtn.addEventListener('click',() =>
//     {
//       screen.innerText = '';
//       index = 0;
//     });
//   })
// }

// const operators = document.querySelectorAll('.operator');
// let increment = screen.innerText; 
// let firstStr = '';
// let newStr = '';
// operators.forEach((operator) =>
// {
//   operator.addEventListener('click',() =>
//   {
//     increment = screen.innerText;
//     newStr = increment.slice(index, -1);
//     for(let i = 0; i <= increment.length; i++)
//     {
//       if(increment.charAt(i) === operator.innerText)
//       {
//         index = i +1;
//         console.log(index);
//       }
//     }
//     console.log(increment);
//     console.log(newStr);
//   });
// })

