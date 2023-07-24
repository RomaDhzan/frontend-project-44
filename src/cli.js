import readlineSync from 'readline-sync';
export const greeting = () => {
    const name = readlineSync.question('Your answer: ');
    
    console.log('Hello ' + name + '!');
};
