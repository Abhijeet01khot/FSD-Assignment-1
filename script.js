function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }

  return a / b;
}

function calculate() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  const resultElement = document.getElementById("result");

  if (
    document.getElementById("num1").value === "" ||
    document.getElementById("num2").value === ""
  ) {
    resultElement.textContent = "Enter both numbers";
    return;
  }

  let result;

  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;

    case "-":
      result = subtract(num1, num2);
      break;

    case "*":
      result = multiply(num1, num2);
      break;

    case "/":
      result = divide(num1, num2);
      break;

    default:
      result = "Invalid operation";
  }

  resultElement.textContent = result;
}