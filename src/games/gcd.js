import getRandomNum from '../randomnum.js';
import NOD from '../NOD.js';
import circle from '../index.js';

const game = () => {
  const description = [];
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);
  description.push('Find the greatest common divisor of given numbers.');
  description.push(`Question: ${num1} ${num2}`);
  const correctAnswer = NOD(num1, num2);
  description.push(correctAnswer.toString());
  return description;
};
const gcd = () => {
  circle(game);
};
export default gcd;
