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

function operate(operator, x, y)
{
    switch(operator) {
        case '+':
            return add(x,y);
          break;
        case '-':
            return subtract(x,y);
          break;
        case 'x':
            return multiply(x,y);
            break;
        case '/':
            return divide(x,y);
            break;
        default:
          // code block
          return 'ERROR';
      }
}

console.log(operate('', 1,2));

const x = document.querySelector('.multiply');
x.addEventListener('click',function(){console.log('work')});

const buttons = document.querySelectorAll('.button:not(.reset)');
const screen = document.getElementById('screen');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      screen.innerText += button.innerText;
      screen.style.textAlign = 'right'; // Align text to right
    screen.style.padding = '0'; // Add some padding to the text
    });
  });
console.log(screen);
console.log(buttons);
