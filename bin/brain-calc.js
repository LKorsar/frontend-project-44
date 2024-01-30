#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const calcGame = () => {
  /* eslint-disable no-console */
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  let correctAnswer;
  let sumOfCorrectAnswers = 0;
  for (let i = 1; i <= 3; i += 1) {
    const number1 = getRandomInt(1, 100);
    const number2 = getRandomInt(1, 100);
    const operator = getRandomOperator();
    console.log(`Question: ${number1} ${operator} ${number2}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (operator === '+') {
      correctAnswer = number1 + number2;
    } else if (operator === '-') {
      correctAnswer = number1 - number2;
    } else {
      correctAnswer = number1 * number2;
    }
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

calcGame();
