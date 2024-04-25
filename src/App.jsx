import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavBar, TypeWriter, Line } from './components';
import { TYPE_WORDS } from './consts';
import './compiled.css';
import { randomSpliceArray } from './utils';

function App() {
  const [canInit, setCanInit] = useState(false);

  const yAlign = [
    '-top-32',
    '-top-24',
    '-top-12',
    '-top-20',
    '-top-16',
    '-top-28',
  ];
  const xAlign = [
    'right-10',
    'right-24',
    'right-44',
    'right-64',
    'right-80',
    'right-96',
  ];
  const generateAlignments = () => {
    const alignments = [];
    const xAlignments = [...xAlign];
    for (let i = 0; i < 6; i++) {
      alignments.push({ y: yAlign[i], x: randomSpliceArray(xAlignments)[0] });
    }
    return alignments;
  };

  return (
    <div className='App'>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        onAnimationComplete={() => setCanInit(true)}
        className='flex flex-col items-center  justify-center w-full z-0 min-h-screen bg-darkest-black'
      >
        {canInit && (
          <>
            <motion.div
              initial={{ y: -300 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                type: 'spring',
                stiffness: 100,
              }}
              className='relative flex w-3/4 flex-row gap-5 text-6xl  text-center items-center justify-between font-medium text-text-white'
            >
              <div className='flex flex-row gap-5'>
                <div>Sites need to be...</div>
                <TypeWriter typeContent={TYPE_WORDS} />
              </div>

              <div className='relative bg-green-500 p-20 rounded-full'>
                {generateAlignments().map(({ x, y }, i) => {
                  return <Line key={i} className={`${x} ${y}`} />;
                })}
              </div>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default App;
