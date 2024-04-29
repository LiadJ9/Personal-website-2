import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { RAINBOW_GRADIENTS, UNITS } from 'consts';

const LandingUnits = () => {
  const [rainbows, setRainbows] = useState(false);
  const containerRef = useRef(null);

  return (
    <div className='bg-gradient-to-b from-text-white to-cyan-600 dark:bg-gradient-to-b  dark:from-darkest-black dark:to-m-blue w-full h-auto lg:h-80vh flex flex-col gap-12 lg:gap-36  items-center'>
      <div className='dark:bg-darkest-black  w-full h-40 gradient-mask-b-10'></div>
      <div className='flex flex-col lg:flex-row w-5/6 lg:w-4/5 5 items-center dark:text-text-white text-cyan-800 justify-between'>
        <motion.div
          transition={{ delay: 0.3 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={clsx('flex flex-col w-full gap-5', {
            [RAINBOW_GRADIENTS[rainbows]]: rainbows !== false,
            'text-transparent bg-clip-text': rainbows !== false,
          })}
        >
          <div className='text-xl lg:text-xxl'>
            Creating beautiful sites that just work.
          </div>
          <div className='text-lg lg:text-xl  max-w-3xl h-fit'>
            I specialize in tailoring each site to precise 1/1 specifications,
            ensuring that everything aligns perfectly with the design vision.
            Whether its executing intricate designs or implementing
            sophisticated state management systems, my goal is to create
            websites that not only dazzle but also function effortlessly.
          </div>
        </motion.div>
        <div
          ref={containerRef}
          className='flex flex-col relative w-5/6 lg:w-2/4 h-80 border-text-white'
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
