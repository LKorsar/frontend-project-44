const getRandomInt = (min, max) => {
  const int = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
  return int;
};

export default getRandomInt;
