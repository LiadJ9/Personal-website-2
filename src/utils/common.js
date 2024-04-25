export const randomArrayItem = (arr) => {
  const randomItem = arr[Math.floor(Math.random() * arr.length)];
  if (randomItem) return randomItem;
  return null;
};

export const randomSpliceArray = (arr) => {
  const randomItem = arr.splice(Math.floor(Math.random() * arr.length), 1);
  if (randomItem) return randomItem;
  return null;
};
