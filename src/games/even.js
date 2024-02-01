/* eslint-disable import/extensions */
import commonGameLogic from '../index.js';
import getRandomInt from '../randomInt.js';
/* eslint-enable import/extensions */

const evenGame = () => {
  const evenGameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const evenGameAlgorithm = () => {
    const number = getRandomInt(1, 1000);
    const gameQuestion = number;
    let correctAnswer;
    /* eslint-disable no-unused-expressions */
    number % 2 === 0 ? correctAnswer = 'yes' : correctAnswer = 'no';
    /* eslint-enable no-unused-expressions */

    return [gameQuestion, correctAnswer];
  };
  commonGameLogic(evenGameRules, evenGameAlgorithm);
};

export default evenGame;
