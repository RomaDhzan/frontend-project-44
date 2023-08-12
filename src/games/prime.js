import getRandomNum from '../randomnum.js';
import isPrime from '../isPrime.js';
import circle from '../index.js';

const game = () => {
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
const prime = () => {
  circle(game);
};
export default prime;
