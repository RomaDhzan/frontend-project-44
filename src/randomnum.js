const getRandomNum = (num1, num2) => {
  let min = num1;
  let max = num2;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
export default getRandomNum;
