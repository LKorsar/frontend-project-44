import getCommonGameLogic from '../index.js';
import getRandomInt from '../randomInt.js';

const getPrimeGame = () => {
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
    if (arr.length === 2) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    return [gameQuestion, correctAnswer];
  };
  getCommonGameLogic(primeGameRules, primeGameAlgorithm);
};

export default getPrimeGame;
