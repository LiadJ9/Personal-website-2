import { X_ALIGN, Y_ALIGN } from '../consts';

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

export const generateAlignments = () => {
  const alignments = [];
  const xAlignments = [...X_ALIGN];
  for (let i = 0; i < 6; i++) {
    alignments.push({ y: Y_ALIGN[i], x: randomSpliceArray(xAlignments)[0] });
  }
  return alignments;
};

export const randomAxisArray = () => {
  const array = [];
  for (let i = 0; i < 7; i++) {
    const num = Math.floor(Math.random() * 401) - 200;
    array.push(num);
  }
  array.push(0);
  return array;
};

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
