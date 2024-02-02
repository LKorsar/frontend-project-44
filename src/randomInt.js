const getRandomInt = (min, max) => {
  const raInt = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
  return raInt;
};

export default getRandomInt;
