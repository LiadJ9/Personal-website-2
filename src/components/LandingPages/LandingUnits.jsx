import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { RAINBOW_GRADIENTS, UNITS } from '../../consts';

const LandingUnits = () => {
  const [rainbows, setRainbows] = useState(false);
  const containerRef = useRef(null);

  return (
    <div className='bg-gradient-to-b from-slate-100 to-m-blue dark:bg-gradient-to-b  dark:from-darkest-black dark:to-m-blue w-full h-screen flex flex-col items-center'>
      <div className='dark:bg-darkest-black  w-full h-40 gradient-mask-b-10'></div>
      <div className='flex flex-row w-3/4 items-center justify-between'>
        <motion.div
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0, x: 100, y: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          className={clsx('flex flex-col w-full gap-5', {
            [RAINBOW_GRADIENTS[rainbows]]: rainbows !== false,
            'text-transparent bg-clip-text': rainbows !== false,
          })}
        >
          <div className='text-xxl'>
            Creating beautiful sites that just work.
          </div>
          <div className='text-xl max-w-3xl h-fit'>
            I specialize in tailoring each site to precise 1/1 specifications,
            ensuring that everything aligns perfectly with the design vision.
            Whether its executing intricate designs or implementing
            sophisticated state management systems, my goal is to create
            websites that not only dazzle but also function effortlessly.
          </div>
        </motion.div>
        <div
          ref={containerRef}
          className='flex flex-col relative w-2/4 h-80 border-text-white'
        >
          {UNITS.map(
            ({ unit, hoverColor, size = 'text-6xl', pos: { x, y } }, index) => (
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
  );
};

export default LandingUnits;