#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);

let i = 0;
while (i < 3) {
  const getRandomNum = (num1, num2) => {
    let min = num1;
    let max = num2;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);
  console.log(
    `Find the greatest common divisor of given numbers.\nQuestion: ${num1} ${num2}`,
  );
  const answer = readlineSync.question('Your answer: ');

  function NOD(x, y) {
    if (y > x) return NOD(y, x);
    if (!y) return x;
    return NOD(y, x % y);
  }
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
