const getRandomInt = (min, max) => {
  /* eslint-disable no-param-reassign */
  min = Math.ceil(min);
  max = Math.floor(max);
  /* eslint-enable no-param-reassign */
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomInt;
