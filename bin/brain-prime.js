#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);
let i = 0;

while (i < 3) {
  const getRandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const num = getRandomNum(0, 100);
  console.log(
    `Answer "yes" if given number is prime. Otherwise answer "no".\nQuestion: ${num}`,
  );

  const answer = readlineSync.question('Your answer: ');

  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  const primeOrNot = isPrime(num);
  if (primeOrNot === true && answer === 'yes') {
    console.log('Correct!');
  }
  if (primeOrNot === false && answer === 'no') {
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
