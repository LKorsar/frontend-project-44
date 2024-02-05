import getCommonGameLogic from '../index.js';
import getRandomInt from '../randomInt.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const getCalcGame = () => {
  const calcGameRules = 'What is the result of the expression?';

  const calcGameAlgorithm = () => {
    const number1 = getRandomInt(1, 100);
    const number2 = getRandomInt(1, 100);
    const operator = getRandomOperator();

    const gameQuestion = `${number1} ${operator} ${number2}`;

    let correctAnswer;

    switch (operator) {
      case '+': 
        correctAnswer = (number1 + number2).toString();
        break;
      case '-':
        correctAnswer = (number1 - number2).toString();
        break;
      case '*':  
        correctAnswer = (number1 * number2).toString();
        break;
        default:
      correctAnswer = null;
    }

    return [gameQuestion, correctAnswer];
  };
  getCommonGameLogic(calcGameRules, calcGameAlgorithm);
};

export default getCalcGame;
