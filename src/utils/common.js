export const randomArrayItem = (arr) => {
  const randomItem = arr[Math.floor(Math.random() * arr.length)];
  if (randomItem) return randomItem;
  return null;
};
