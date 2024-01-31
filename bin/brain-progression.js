#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcome } from '../src/index.js';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const progressionGame = () => {
  /* eslint-disable no-console */
  console.log('brain-progression');
  welcome();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  let correctAnswer;
  let sumOfCorrectAnswers = 0;
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomInt(1, 100);
    const difference = getRandomInt(1, 10);
    const progression = [number, number + difference, number + 2 * difference, number + 3 * difference, number + 4 * difference, number + 5 * difference, number + 6 * difference, number + 7 * difference, number + 8 * difference, number + 9 * difference];
    const indexOfMissingNumber = getRandomInt(1, 9);
    const removed = progression.splice(indexOfMissingNumber, 1, "..");
    correctAnswer = Number(removed.join(' '));
    const question = progression.join(' ');
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer:');
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

progressionGame();