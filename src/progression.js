import getRandomNum from './randomnum.js';

const newProgression = () => {
  let num1 = getRandomNum(0, 100);
  const arfmProgres = getRandomNum(1, 10);
  const progressionLength = getRandomNum(5, 20);

  const progressionArray = [];

  for (let j = 0; j < progressionLength; j += 1) {
    num1 += arfmProgres;
    progressionArray.push(num1);
  }
  return progressionArray;
};
const progression = () => {
  const description = [];
  const arfmProgression = newProgression();
  const progressionRNDOMItem = getRandomNum(0, arfmProgression.length - 1);
  const correctAnswer = arfmProgression[progressionRNDOMItem];
  arfmProgression[progressionRNDOMItem] = '..';
  const question = arfmProgression;
  description.push(`What number is missing in the progression?\nQuestion: ${question.toString().replace(/,/g, ' ')}`);
  description.push(correctAnswer.toString());
  return description;
};

export default progression;
