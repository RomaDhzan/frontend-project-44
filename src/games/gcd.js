import getRandomNum from '../randomnum.js';

import circle from '../index.js';
const findDivisor = (x, y) => {
  if (y > x) return findDivisor(y, x);
  if (!y) return x;
  return findDivisor(y, x % y);
};

const DoGame = () => {
  const description = [];
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);
  description.push('Find the greatest common divisor of given numbers.');
  description.push(`Question: ${num1} ${num2}`);
  const correctAnswer = findDivisor(num1, num2);
  description.push(correctAnswer.toString());
  return description;
};
const DoGcd = () => {
  circle(DoGame);
};
export default DoGcd;
