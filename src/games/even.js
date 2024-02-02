import commonGameLogic from '../index.js';
import getRandomInt from '../randomInt.js';

const evenGame = () => {
  console.log('brain-even');
  const evenGameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const evenGameAlgorithm = () => {
    const number = getRandomInt(1, 1000);
    const gameQuestion = number;
    let correctAnswer;
    if (number % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    return [gameQuestion, correctAnswer];
  };
  commonGameLogic(evenGameRules, evenGameAlgorithm);
};

export default evenGame;
