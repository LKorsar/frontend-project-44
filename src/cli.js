import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('May I have your name? ');
  /* eslint-disable no-console */
  console.log(`Hello, ${userName}!`);
  /* eslint-enable no-console */
};
