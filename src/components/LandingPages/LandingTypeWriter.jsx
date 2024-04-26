import { motion } from 'framer-motion';
import { generateAlignments } from '../../utils';
import { Line } from '../Animations';
import { TYPE_WORDS } from '../../consts';
import { TypeWriter } from '../index';

const LandingTypeWriter = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen '>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: 'spring',
          stiffness: 100,
        }}
        className='relative flex w-3/4 flex-row gap-5 text-6xl text-center items-center justify-between font-medium text-darkest-black dark:text-text-white'
      >
        <motion.div
          initial={{ opacity: 0, x: -100, y: -100 }}
          animate={{
            opacity: 1,
            x: [-200, -120, 0],
            y: [-100, 200, 0],
          }}
          transition={{
            delay: 1,
            stiffness: 10,
            duration: 0.7,
            type: 'spring',
          }}
          className='flex flex-row gap-5'
        >
          <div>Sites need to be...</div>
          <TypeWriter typeContent={TYPE_WORDS} />
        </motion.div>

        <div className='relative bg-green-500 p-20 rounded-full'>
          {generateAlignments().map(({ x, y }, i) => {
            return <Line key={i} className={`${x} ${y}`} />;
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default LandingTypeWriter;
