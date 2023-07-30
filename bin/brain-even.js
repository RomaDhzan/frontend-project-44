#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting, { getRandomNum } from '../src/cli.js';

const name = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let i = 0;
while (i < 3) {
  const question = getRandomNum(0, 100);
  console.log('Question:', question);
  const yesOrNo = question % 2 === 0;
  const answer = readlineSync.question('Your answer: ');
  const answerFalseOrTrue = answer === 'yes';

  if (yesOrNo === answerFalseOrTrue) {
    console.log('Correct!');
  }
  if (yesOrNo !== answerFalseOrTrue) {
    if (answer === 'yes') {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`,
      );
      break;
    }
    if (answer === 'no') {
      console.log(
        `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`,
      );
      break;
    }
  }
  i += 1;
}

if (i === 3) {
  console.log(`Congratulations, ${name}!`);
}
