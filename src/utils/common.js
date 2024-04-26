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
