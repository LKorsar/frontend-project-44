/* eslint-disable import/extensions */
import commonGameLogic from '../index.js';
import getRandomInt from '../randomInt.js';
/* eslint-enable import/extensions */

const primeGame = () => {
  const primeGameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const primeGameAlgorithm = () => {
    const number = getRandomInt(1, 100);

    const gameQuestion = number;

    let correctAnswer;
    const arr = [];

    for (let divisor = 1; divisor <= number; divisor += 1) {
      if (number % divisor === 0) {
        arr.push(divisor);
      }
    }
    /* eslint-disable no-unused-expressions */
    (arr.length === 2) ? correctAnswer = 'yes' : correctAnswer = 'no';
    /* eslint-enable no-unused-expressions */

    return [gameQuestion, correctAnswer];
  };
  commonGameLogic(primeGameRules, primeGameAlgorithm);
};

export default primeGame;
