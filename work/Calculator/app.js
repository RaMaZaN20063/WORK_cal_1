const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const кобейтуBtn = document.getElementById("кобейту");
const болуBtn = document.getElementById("болу");

let action = "+";

plusBtn.onclick = function () {
  action = "+";
};

minusBtn.onclick = function () {
  action = "-";
};

болуBtn.onclick = function () {
  action = "/";
};

кобейтуBtn.onclick = function () {
  action = "*";
};

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function Esepteu(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  if (actionSymbol == "+") {
    return num1 + num2;
  }
  if (actionSymbol == "-") {
    return num1 - num2;
  }
  if (actionSymbol == "/") {
    return num1 / num2;
  }
  if (actionSymbol == "*") {
    return num1 * num2;
  }
}

submitBtn.onclick = function () {
  result = Esepteu(input1, input2, action);
  printResult(result);
};

//console.log(input1.value);
//console.log(input2.value);
//let result = 0;
//
//plusBtn.onclick = function () {
//  action = "+";
//  console.log(action);
//};
//minusBtn.onclick = function () {
//  action = "-";
//  console.log(action);
//};
//
//submitBtn.onclick = function () {
//  if (action == "+") {
//    result = Number(input1.value) + Number(input2.value);
//    console.log(result);
//  }
//  if (action == "-") {
//    result = Number(input1.value) - Number(input2.value);
//    console.log(result);
//  }
//  addColor(result);
//  calculate(input1, input2, action);
//  resultElement.textContent = result;
//};
//
//function addColor() {
//  if (result < 0) {
//    resultElement.style.color = "red";
//  } else {
//    resultElement.style.color = "green";
//  }
//
//  submitBtn.onclick = function () {
//    calculate();
//    addcolor(result);
//    resultElement.textContent = result;
//  };
//
//  function calculate() {
//    if (action == "+") {
//      result = Number(input1.value) + Number(input2.value);
//      console.log(result);
//    } else {
//      result = Number(input1.value) - Number(input2.value);
//      console.log(result);
//    }
//  }
//
//  function addcolor(result) {
//    if (result < 0) {
//      resultElement.style.color = "red";
//    } else {
//      resultElement.style.color = "green";
//    }
//  }
//}

//можн и так написать

//submitBtn.onclick = function () {
//  calculate();
//  addcolor(result);
//  resultElement.textContent = result;
//};
//
//function calculate() {
//  if (action == "+") {
//    result = Number(input1.value) + Number(input2.value);
//    console.log(result);
//  } else {
//    result = Number(input1.value) - Number(input2.value);
//    console.log(result);
//  }
//}
//
//function addcolor(result) {
//  if (result < 0) {
//    resultElement.style.color = "red";
//  } else {
//    resultElement.style.color = "green";
//  }
//}
