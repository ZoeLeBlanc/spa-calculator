var addition = document.getElementById("addition");
var subtraction = document.getElementById("subtraction");
var division = document.getElementById("division");
var multiplication = document.getElementById("multiplication");
var number1 = document.getElementById("number1").value;
var number2 = document.getElementById("number2").value;
var totalValue = "";

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function addNum (num1, num2) {
  numTotal = num1 + num2;
  return numTotal;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

function subtractNum (num1, num2) {
  numTotal = num1 - num2;
  return numTotal;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divideNum (num1, num2) {
  numTotal = num1 / num2;
  return numTotal;
}
/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiplyNum (num1, num2) {
  numTotal = num1 * num2;
  return numTotal;
}
/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
 function calculator(num1, num2, operation) {
    if (addition.clicked) { 
     totalValue = operation(num1, num2);
    }
    if (subtraction.clicked) {
     totalValue = operation(num1, num2);
    }
    if (division.clicked) {
     totalValue = operation(num1, num2);
    }
    if (multiplication.clicked) {
     totalValue = operation(num1, num2);
    }
    console.log(totalValue);
    return totalValue;
 }

calculator(number1, number2, addNum);

//addition.addEventListener("click", calculator(number1.value, number2.value, addNum), true);
//subtraction.addEventListener("click", calculator(number1.value, number2.value, sutractNum), true);
//division.addEventListener("click", calculator(number1.value, number2.value, divideNum), true);
//multiplication.addEventListener("click", calculator(number1.value, number2.value, multiplyNum), true);