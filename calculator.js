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


addBtn.addEventListener("click", function() {
  calculator(addNum);
}, false);
subtractBtn.addEventListener("click", function() {  
  calculator(subtractNum);
  }, false);
divideBtn.addEventListener("click", function() {
  calculator(divideNum);
}, false);
multiplyBtn.addEventListener("click", function() {
  calculator(multiplyNum);
}, false);

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
function getInputs(operationMath) {
  var inputs = {};
  inputs.num1 = parseInt(number1.value);
  inputs.num2 = parseInt(number2.value);
  inputs.operate = operationMath;

  calculator(inputs.num1, inputs.num2, inputs.operate);
}
*/

 function calculator(operationToDo) {
    num1 = parseInt(number1.value);
    num2 = parseInt(number2.value);
    var result = operationToDo(num1, num2);
    console.log("result", result);
    console.log("num1", num1);
    console.log("num2", num2);
    console.log("operationToDo", operationToDo);
    return result
     }
    /*var num1 = parseInt(number1.value);
    var  num2 = parseInt(number2.value);
    var numTotal = "";
    if (add.clicked) { 
      numTotal = num1 + num2;
    } else if (subtract.clicked) {
      numTotal = num1 - num2;
    } else if (divide.clicked) {
      numTotal = num1 / num2;
    } else if (multiply.clicked) {
      numTotal = num1 / num2;
    } else {
      numTotal = "";
    }
    console.log("numTotal", numTotal);
    console.log("num1", num1);
    //console.log("click" , num1, num2, operation);
    //return totalValue;
    */

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 
 function calculator(num1, num2) {
    if (add.clicked) { 
      operation = addNum();
      totalValue = operation(num1, num2);
    } else if (subtract.clicked) {
     totalValue = operation(num1, num2);
    } else if (divide.clicked) {
     totalValue = operation(num1, num2);
    } else if (multiply.clicked) {
     totalValue = operation(num1, num2);
    }

    console.log("totalValue", totalValue);
    console.log("click" , num1, num2, operation);
    //return totalValue;
 }

//calculator(number1, number2, addNum);
*/
