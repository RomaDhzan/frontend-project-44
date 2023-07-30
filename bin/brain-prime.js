#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting, { getRandomNum } from '../src/cli.js';

const name = greeting();
let i = 0;

while (i < 3) {
  const num = getRandomNum(0, 100);
  console.log(
    `Answer "yes" if given number is prime. Otherwise answer "no".\nQuestion: ${num}`,
  );

  const answer = readlineSync.question('Your answer: ');

  const isPrime = (item) => {
    for (let j = 2, s = Math.sqrt(item); j <= s; j += 1) {
      if (item % j === 0) return false;
    }
    return item > 1;
  };
  const primeOrNot = isPrime(num);
  if (primeOrNot === true && answer === 'yes') {
    console.log('Correct!');
    i += 1;
  } else if (primeOrNot === false && answer === 'no') {
    console.log('Correct!');
    i += 1;
  } else {
    console.log(`${answer} is wrong answer ;(.\nLet's try again, ${name}!`);
    break;
  }
}
if (i === 3) {
  console.log(`Congratulations, ${name}!`);
}
