/* eslint-disable import/extensions */
import commonGameLogic from '../index.js';
import getRandomInt from '../randomInt.js';
/* eslint-enable import/extensions */

const gcdGame = () => {
  const gcdGameRules = 'Find the greatest common divisor of given numbers.';

  const gcdGameAlgorithm = () => {
    let number1 = getRandomInt(1, 100);
    let number2 = getRandomInt(1, 100);
    let reminderOfDivision;

    const gameQuestion = `${number1} ${number2}`;

    while (reminderOfDivision !== 0) {
      reminderOfDivision = number1 % number2;
      number1 = number2;
      number2 = reminderOfDivision;
    }
    const correctAnswer = (number1).toString();

    return [gameQuestion, correctAnswer];
  };
  commonGameLogic(gcdGameRules, gcdGameAlgorithm);
};

export default gcdGame;
