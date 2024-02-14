const prompt = require('prompt-sync')();

const firstNumber = parseFloat(prompt('The first number: '));
const secondNumber = parseFloat(prompt('The second number: '));

const largerNumber = findLargerNumber(firstNumber, secondNumber);
console.log(`The larger number is: ${largerNumber}`);

function findLargerNumber(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error('Error: Enter only numbers');
  }
  return num1 > num2 ? num1 : num2;
}
