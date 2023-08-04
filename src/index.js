import readlineSync from 'readline-sync';

const circle = (func) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);

  let i = 0;
  while (i < 3) {
    const dataArray = func();
    const example = dataArray[0];

    const correctAnswer = dataArray[1];
    console.log(example);

    const answer = readlineSync.question('Your answer: ');
    const tOrf = correctAnswer === answer;

    if (tOrf === true) {
      console.log('Correct!');
      i += 1;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    if (tOrf === false) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}\nLet's try again, ${name}!`);
      console.log('');
      break;
    }
  }
};
export default circle;
