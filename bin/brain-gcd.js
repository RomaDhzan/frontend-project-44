#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting, { getRandomNum } from '../src/cli.js';

const name = greeting();

let i = 0;
while (i < 3) {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);
  console.log(
    `Find the greatest common divisor of given numbers.\nQuestion: ${num1} ${num2}`,
  );
  const answer = readlineSync.question('Your answer: ');

  const NOD = (x, y) => {
    if (y > x) return NOD(y, x);
    if (!y) return x;
    return NOD(y, x % y);
  };
  const correctAnswer = NOD(num1, num2);

  if (correctAnswer === Number(answer)) {
    console.log('Correct!');
    i += 1;
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}\nLet's try again, ${name}!`);
    break;
  }
}
if (i === 3) {
  console.log(`Congratulations, ${name}!`);
}
