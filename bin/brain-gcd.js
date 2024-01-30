#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const gcdGame = () => {
  /* eslint-disable no-console */
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let correctAnswer;
  let sumOfCorrectAnswers = 0;
  for (let i = 1; i <= 3; i += 1) {
    let number1 = getRandomInt(1, 100);
    let number2 = getRandomInt(1, 100);
    let reminderOfDivision;
    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = readlineSync.question('Your answer:');
    while (reminderOfDivision !== 0) {
      reminderOfDivision = number1 % number2;
      number1 = number2;
      number2 = reminderOfDivision;
    }
    correctAnswer = number1;
    if (Number(userAnswer) === correctAnswer) {
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

gcdGame();
