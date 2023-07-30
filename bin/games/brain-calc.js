#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting, { getRandomNum } from '../../src/cli.js';

const name = greeting();
let i = 0;
while (i < 3) {
  let tag = '';

  const calc = () => {
    const num1 = getRandomNum(0, 10);
    const num2 = getRandomNum(0, 10);
    const operations = ['+', '-', '*'];
    let result = 0;
    const randomOperation = operations[Math.floor(Math.random() * operations.length)];
    console.log(
      `What is the result of the expression?\nQuestion: ${num1} ${randomOperation} ${num2}`,
    );
    switch (randomOperation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      default:
        result = num1 * num2;
        break;
    }
    const answer = readlineSync.question('Your answer: ');
    switch (Number(result)) {
      case Number(answer): {
        const correct = 'Correct!';
        tag = true;
        return console.log(correct);
      }
      default:
        tag = false;
        return console.log(
          `${answer} is wrong answer ;(. Correct answer was ${result}\nLet's try again, ${name}!`,
        );
    }
  };

  calc();
  if (tag === false) {
    break;
  }
  if (tag === true) {
    i += 1;
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
