import getRandomNum from '../randomnum.js';

import circle from '../index.js';

const isPrime = (item) => {
  for (let j = 2, s = Math.sqrt(item); j <= s; j += 1) {
    if (item % j === 0) return false;
  }
  return item > 1;
};

const DoGame = () => {
  const description = [];
  const question = getRandomNum(0, 100);
  description.push('Answer "yes" if given number is prime. Otherwise answer "no".');
  description.push(`Question: ${question}`);
  const correctAnswer = isPrime(question);
  if (correctAnswer === true) {
    description.push('yes');
  }
  if (correctAnswer === false) {
    description.push('no');
  }
  return description;
};
const DoPrime = () => {
  circle(DoGame);
};
export default DoPrime;
