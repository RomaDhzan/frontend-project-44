import getRandomNum from '../randomnum.js';
import circle from '../index.js';
const makeCalculation = (num1,randomOperation, num2) => {
  
  
  let result = 0;
  switch (randomOperation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operator: '${randomOperation}'!`);
  }
  return result;
};

const DoGame = () => {
  const description = [];
  const num1 = getRandomNum(0, 10);
  const num2 = getRandomNum(0, 10);
  const operations = ['+', '-', '*'];
  let result = 0;
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  description.push('What is the result of the expression?');
  description.push(`Question: ${num1} ${randomOperation} ${num2}`);
  result = makeCalculation(num1 ,randomOperation, num2);
  description.push(result.toString());
  return description;
};
const DoCalc = () => {
  circle(DoGame);
};
export default DoCalc;
