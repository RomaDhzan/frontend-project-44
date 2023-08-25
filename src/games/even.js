import getRandomNum from '../randomnum.js';
import circle from '../index.js';
const isEven = (num) =>{
  const result = num % 2 === 0;
  return result;
}
const DoGame = () => {
  const description = [];

  const question = getRandomNum(0, 100);
  description.push('Answer "yes" if the number is even, otherwise answer "no".');
  description.push(`Question: ${question}`);
  const correctAnswer = isEven(question);

  if (correctAnswer === true) {
    description.push('yes');
  }
  if (correctAnswer === false) {
    description.push('no');
  }

  return description;
};
const DoEven = () => {
  circle(DoGame);
};
export default DoEven;
