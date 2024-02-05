import readlineSync from 'readline-sync';

const getCommonGameLogic = (gameRules, gameAlgorithm) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRules);

  const gameRoundsCount = 3;
  for (let i = 0; i < gameRoundsCount; i += 1) {
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

export default getCommonGameLogic;
