import getRandomNum from './randomnum.js';

const calc = () => {
  const description = [];
  const num1 = getRandomNum(0, 10);
  const num2 = getRandomNum(0, 10);
  const operations = ['+', '-', '*'];
  let result = 0;
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  description.push(`What is the result of the expression?\nQuestion: ${num1} ${randomOperation} ${num2}`);
  switch (randomOperation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    default:
      result = num1 * num2;
      break;
  }
  description.push(result.toString());
  return description;
};
export default calc;