import readlineSync from 'readline-sync';

const commonGameLogic = (gameRules, gameAlgorithm) => {
  /* eslint-disable no-console */
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRules);

  let sumOfCorrectAnswers = 0;

  for (let i = 1; i <= 3; i += 1) {
    const inputData = gameAlgorithm();
    const gameQuestion = inputData[0];

    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer:');

    const correctAnswer = inputData[1];
    if (userAnswer === correctAnswer) {
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

export default commonGameLogic;
