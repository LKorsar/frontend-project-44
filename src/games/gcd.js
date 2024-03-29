import getCommonGameLogic from '../index.js';
import getRandomInt from '../randomInt.js';

const getGcdGame = () => {
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
  getCommonGameLogic(gcdGameRules, gcdGameAlgorithm);
};

export default getGcdGame;
