import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question('May I have your name?: ');

  console.log(`Hello, ${name}!`);
  return name;
};
export const getRandomNum = (num1, num2) => {
  let min = num1;
  let max = num2;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
export default greeting;
