/* eslint-disable import/extensions */
import commonGameLogic from '../index.js';
import getRandomInt from '../randomInt.js';
/* eslint-enable import/extensions */

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const calcGame = () => {
  const calcGameRules = 'What is the result of the expression?';

  const calcGameAlgorithm = () => {
    const number1 = getRandomInt(1, 100);
    const number2 = getRandomInt(1, 100);
    const operator = getRandomOperator();

    const gameQuestion = `${number1} ${operator} ${number2}`;

    let correctAnswer;

    if (operator === '+') {
      correctAnswer = (number1 + number2).toString();
    } else if (operator === '-') {
      correctAnswer = (number1 - number2).toString();
    } else {
      correctAnswer = (number1 * number2).toString();
    }

    return [gameQuestion, correctAnswer];
  };
  commonGameLogic(calcGameRules, calcGameAlgorithm);
};

export default calcGame;
