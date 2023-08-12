import newProgression from '../newProgression.js';
import getRandomNum from '../randomnum.js';
import circle from '../index.js';

const game = () => {
  const description = [];
  const arfmProgression = newProgression();
  const progressionRNDOMItem = getRandomNum(0, arfmProgression.length - 1);
  const correctAnswer = arfmProgression[progressionRNDOMItem];
  arfmProgression[progressionRNDOMItem] = '..';
  const question = arfmProgression;
  description.push(`What number is missing in the progression?`);
  description.push(`Question: ${question.toString().replace(/,/g, ' ')}`)
  description.push(correctAnswer.toString());
  return description;
};
const progression = () => {
  circle(game);
};

export default progression;
