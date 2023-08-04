import getRandomNum from './randomnum.js';

const NOD = (x, y) => {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
};
const gcd = () => {
  const description = [];
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);
  description.push(`Find the greatest common divisor of given numbers.\nQuestion: ${num1} ${num2}`);
  const correctAnswer = NOD(num1, num2);
  description.push(correctAnswer.toString());
  return description;
};
export default gcd;
