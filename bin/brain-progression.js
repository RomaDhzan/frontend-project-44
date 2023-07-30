#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting, { getRandomNum } from '../src/cli.js';

const name = greeting();

let i = 0;
while (i < 3) {
  const progression = () => {
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

  const arfmProgression = progression();
  const progressionRNDOMItem = getRandomNum(0, arfmProgression.length - 1);
  const trueAnswer = arfmProgression[progressionRNDOMItem];
  arfmProgression[progressionRNDOMItem] = '..';
  console.log(`What number is missing in the progression?\nQuestion: ${arfmProgression.toString().replace(/,/g, ' ')}`);

  const answer = readlineSync.question('Your answer: ');

  if (Number(trueAnswer) === Number(answer)) {
    console.log('Correct!');
    i += 1;
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}\nLet's try again, ${name}!`);
    break;
  }
}
if (i === 3) {
  console.log(`Congratulations, ${name}!`);
}
