import getRandomNum from '../randomnum.js';
import circle from '../index.js';

const game = () => {
  const description = [];

  const question = getRandomNum(0, 100);
  description.push(`Answer "yes" if the number is even, otherwise answer "no".`);
  description.push(`Question: ${question}`)
  const correctAnswer = question % 2 === 0;

  if (correctAnswer === true) {
    description.push('yes');
  }
  if (correctAnswer === false) {
    description.push('no');
  }

  return description;
};
const even = () => {
  circle(game);
};
export default even;
