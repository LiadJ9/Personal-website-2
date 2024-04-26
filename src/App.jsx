import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { NavBar, LandingTypeWriter } from './components';
import { useGeneric } from './hooks';
import './compiled.css';
import clsx from 'clsx';

function App() {
  const containerRef = useRef(null);
  const { lightMode } = useGeneric();
  const [canInit, setCanInit] = useState(false);
  const [rainbows, setRainbows] = useState(false);
  const rainbowGradients = [
    'bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400',
    'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500',
    'bg-gradient-to-r from-orange-400 via-red-500 to-pink-500',
    'bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500',
    'bg-gradient-to-r from-green-400 via-blue-500 to-purple-500',
    'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500',
  ];
  console.log(rainbows, rainbowGradients[rainbows]);
  const units = [
    {
      unit: 'em',
      hoverColor: 'hover:text-green-400',
      pos: { x: 'right-10', y: 'bottom-0' },
    },
    {
      unit: 'px',
      hoverColor: 'hover:text-blue-400',
      pos: { x: 'right-20', y: 'top-8' },
    },
    {
      unit: 'vh',
      hoverColor: 'hover:text-red-400',
      pos: { x: 'left-16', y: 'top-24' },
    },
    {
      unit: '%',
      hoverColor: 'hover:text-yellow-400',
      pos: { x: 'right-40', y: 'bottom-28' },
    },
    {
      unit: 'rem',
      hoverColor: 'hover:text-pink-400',
      pos: { x: 'left-40', y: 'bottom-40' },
    },
    {
      unit: '?',
      hoverColor: 'hover:text-purple-400',
      pos: { x: 'left-16', y: 'bottom-12' },
    },
  ];
  return (
    <div className={`App ${lightMode !== true && 'dark'}`}>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        onAnimationComplete={() => setCanInit(true)}
        className='flex flex-col w-full z-0 min-h-screen  bg-text-white dark:bg-darkest-black'
      >
        {canInit && (
          <>
            <div className='flex flex-col justify-center items-center w-full h-screen '>
              <LandingTypeWriter />
            </div>
            <div className='bg-gradient-to-b from-slate-100 to-m-blue dark:bg-gradient-to-b  dark:from-darkest-black dark:to-m-blue w-full h-screen flex flex-col items-center'>
              <div className='dark:bg-darkest-black  w-full h-40 gradient-mask-b-10'></div>
              <div className='flex flex-row w-3/4 items-center justify-between'>
                <div
                  className={clsx(
                    'flex flex-col w-full gap-5 transition-all duration-300',
                    {
                      [rainbowGradients[rainbows]]: rainbows !== false,
                      'text-transparent bg-clip-text': rainbows !== false,
                    }
                  )}
                >
                  <div className='text-xxl'>
                    Creating beautiful sites that just work.
                  </div>
                  <div className='text-xl max-w-3xl'>
                    I specialize in tailoring each site to precise 1/1
                    specifications, ensuring that everything aligns perfectly
                    with the design vision. Whether its executing intricate
                    designs or implementing sophisticated state management
                    systems, my goal is to create websites that not only dazzle
                    but also function effortlessly.
                  </div>
                </div>
                <div
                  ref={containerRef}
                  className='flex flex-col relative w-2/4 h-80 border-text-white'
                >
                  {units.map(
                    (
                      { unit, hoverColor, size = 'text-6xl', pos: { x, y } },
                      index
                    ) => (
                      <motion.div
                        key={unit}
                        className={`absolute ${size} hover:cursor-grab ${hoverColor} ${x} ${y}`}
                        drag
                        onDragStart={() => setRainbows(index)}
                        whileHover={{
                          rotate: '10deg',
                          transition: {
                            repeat: Infinity,
                            repeatType: 'reverse',
                            duration: 0.6,
                          },
                        }}
                        dragConstraints={containerRef}
                      >
                        {unit}
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default App;
