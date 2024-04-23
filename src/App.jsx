import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavBar, TypeWriter, Cube, Line } from './components';
import { TYPE_WORDS } from './consts';
import './compiled.css';

function App() {
  const [canInit, setCanInit] = useState(false);
  const lines = [
    { r: 'right-24', t: 'top-24' },
    { r: 'right-12', t: 'top-80' },
    { r: 'right-32', t: 'top-44' },
    { r: 'right-44', t: 'top-56' },
    { r: 'right-48', t: 'top-64' },
    { r: 'right-24', t: 'top-56' },
  ];

  {
    /* <Cube
              className='absolute top-24 right-24'
              animate={{
                transition: {
                  repeat: Infinity,
                  duration: 0.5,
                  repeatType: 'reverse',
                  type: 'tween',
                },
                animate: {
                  rotate: [0, 20],
                  scale: [0.95, 1],
                  borderRadius: [15, 10],
                },
              }}
            /> */
  }

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
        className='flex flex-col relative items-center  justify-center w-full z-0 min-h-screen bg-darkest-black'
      >
        {canInit && (
          <>
            {lines.map(({ r, t }, i) => {
              return (
                <Line
                  key={i}
                  className={`absolute h-64 ${r} ${t} rounded-lg`}
                />
              );
            })}
            <motion.div
              initial={{ y: -300 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                type: 'spring',
                stiffness: 100,
              }}
              className='flex w-3/4 flex-row gap-9 text-6xl  text-center items-center font-medium text-text-white'
            >
              <div>Sites need to be...</div>
              <TypeWriter typeContent={TYPE_WORDS} />
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default App;
