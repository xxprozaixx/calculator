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

const buttons = Array.from(document.querySelectorAll('.button'))
  .filter(button => button.className === 'button');

console.log(buttons);
