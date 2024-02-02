import readlineSync from 'readline-sync';

const commonGameLogic = (gameRules, gameAlgorithm) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRules);

  for (let gameRounds = 1; gameRounds <= 3; gameRounds += 1) {
    const inputData = gameAlgorithm();
    const gameQuestion = inputData[0];

    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer:');

    const correctAnswer = inputData[1];
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'./n
      Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default commonGameLogic;
