function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number | string {
  if (b === 0) {
      return "Error: Division by zero";
  }
  return a / b;
}

function calculate(operation: string, a: number, b: number): number | string {
  switch (operation.toLowerCase()) {
      case 'add':
      case '+':
          return add(a, b);
      case 'subtract':
      case '-':
          return subtract(a, b);
      case 'multiply':
      case '*':
          return multiply(a, b);
      case 'divide':
      case '/':
          return divide(a, b);
      default:
          return "Error: Invalid operation";
  }
}


console.log(calculate('add', 5, 3));       
console.log(calculate('subtract', 5, 3)); 
console.log(calculate('multiply', 5, 3)); 
console.log(calculate('divide', 6, 3));   
console.log(calculate('divide', 5, 0)); 
console.log(calculate('power', 2, 3));