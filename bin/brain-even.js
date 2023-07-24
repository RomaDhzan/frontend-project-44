#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let i = 0;
while (i < 3) {
  const getRandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const result = () => {
    const question = getRandomNum(0, 100);
    console.log('Question:', question);
    const yesOrNo = question % 2 === 0;
    const answer = readlineSync.question('Your answer: ');
    const answerFalseOrTrue = answer === 'yes';

    if (yesOrNo === answerFalseOrTrue) {
      return console.log('Correct!');
    }
    if (yesOrNo !== answerFalseOrTrue) {
      switch (answer) {
        case 'yes':
          console.log(
            `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again ${name}!`,
          );
          result();
          break;
        case 'no':
          console.log(
            `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again ${name}!`,
          );
          result();
          break;
      }
    }
  };
  result();
  i += 1;
}
console.log(`Congratulations ${name}!`);
