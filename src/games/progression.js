import getCommonGameLogic from '../index.js';
import getRandomInt from '../randomInt.js';

const getProgressionGame = () => {
  const progressionGameRules = 'What number is missing in the progression?';

  const progressionGameAlgorithm = () => {
    const number = getRandomInt(1, 100);
    const difference = getRandomInt(1, 10);
    const progression = [number];
    for (let i = 1; i <= 10; i += 1) {
      progression.push(number + i * difference);
    }
    const indexOfMissingNumber = getRandomInt(1, 9);
    const removed = progression.splice(indexOfMissingNumber, 1, '..');

    const correctAnswer = removed.join(' ');
    const gameQuestion = progression.join(' ');

    return [gameQuestion, correctAnswer];
  };
  getCommonGameLogic(progressionGameRules, progressionGameAlgorithm);
};

export default getProgressionGame;
