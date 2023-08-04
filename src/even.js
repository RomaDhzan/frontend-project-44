import getRandomNum from './randomnum.js';

const even = () => {
  const description = [];

  const question = getRandomNum(0, 100);
  description.push(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${question}`);
  const correctAnswer = question % 2 === 0;

  if (correctAnswer === true) {
    description.push('yes');
  }
  if (correctAnswer === false) {
    description.push('no');
  }

  return description;
};

export default even;
