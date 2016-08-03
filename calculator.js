var addBtn = document.getElementById("addition");
var subtractBtn = document.getElementById("subtraction");
var divideBtn = document.getElementById("division");
var multiplyBtn = document.getElementById("multiplication");
var outputDiv = document.getElementById("output");
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
//var numb1 = number1.value;
//var numb2 = number2.value;
var totalValue = "";


addBtn.addEventListener("click", calculator, false);
subtractBtn.addEventListener("click", calculator, false);
divideBtn.addEventListener("click", calculator, false);
multiplyBtn.addEventListener("click", calculator, false);

/*Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function addNum (num1, num2) {
  var sum = num1 + num2;
  return sum
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 
*/
function subtractNum (num1, num2) {
  var difference = num1 - num2;
  return difference
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
*/
function divideNum (num1, num2) {
  var remainder = num1 % num2;
  return remainder
}

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiplyNum (num1, num2) {
  var product = num1 * num2;
  return product
}

/*
function getValues(operationMath) {
  var values= {};
  values.num1 = parseInt(number1.value);
  values.num2 = parseInt(number2.value);
  values.operate = operationMath;

  calculator(values.num1, values.num2, values.operate);
}
*/


   

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
*/
 
function calculator(num1, num2, operationToDo) {
    var result = "";
    num1 = parseInt(number1.value);
    num2 = parseInt(number2.value);
    if (addBtn.click) { 
      operationToDo = addNum;
      result = operationToDo(num1, num2);
    } else if (subtractBtn.click) {
      operationToDo = subtractNum;
      result = operationToDo(num1, num2);
    } else if (divideBtn.click) {
      operationToDo = divideNum;
      result = operationToDo(num1, num2);
    } else if (multiplyBtn.click) {
      operationToDo = multiplyNum;
      result = operationToDo(num1, num2);
    } 
    console.log("num1", num1);
    console.log("operationToDo", operationToDo);
    console.log("result", result);
    return result
}
    //console.log("click" , num1, num2, operation);
    //return totalValue;
