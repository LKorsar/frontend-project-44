#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const evenGame = () => {
  /* eslint-disable no-console */
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswer;
  let sumOfCorrectAnswers = 0;
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomInt(1, 1000);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer:');
    number % 2 === 0 ? correctAnswer = 'yes' : correctAnswer = 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      sumOfCorrectAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'./n
      Let's try again, ${userName}!`);
      break;
    }
  }
  if (sumOfCorrectAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  /* eslint-enable no-console */
  }
};
evenGame();
