import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { randomArrayItem } from '../../utils';
import { AUDIO_HITS } from '../../consts';

const TypeWriter = ({ typeContent }) => {
  const [currentWord, setCurrentWord] = useState('');
  const [currentFont, setCurrentFont] = useState('montserrat');

  const playHitSound = (shouldBell) => {
    const hitSound = randomArrayItem(AUDIO_HITS);
    if (!hitSound) return;
    const audio = new Audio(hitSound);
    audio.volume = 0.2;
    audio.play();
  };

  const typeLetters = async (word, delay) => {
    let typedWord = '';
    for (const letter of word) {
      typedWord += letter;
      await new Promise((resolve) => setTimeout(resolve, delay));
      setCurrentWord(typedWord);
      playHitSound();
    }
  };

  const clearLetters = async (word, delay) => {
    let clearedWord = word;
    for (const _ of word) {
      clearedWord = clearedWord.slice(0, -1);
      await new Promise((resolve) => setTimeout(resolve, delay));
      playHitSound();
      setCurrentWord(clearedWord);
    }
  };

  const letterEffect = async (typeContent) => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      for (const content of typeContent) {
        const { font, delay, word } = content;
        setCurrentFont(font);
        await typeLetters(word, delay);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await clearLetters(word, delay);
      }
    }
  };

  useEffect(() => {
    letterEffect(typeContent);
  }, [typeContent]);
  return <div className={`font-${currentFont} text-center`}>{currentWord}</div>;
};

TypeWriter.propTypes = {
  typeContent: PropTypes.array,
};

export default TypeWriter;
