import { motion } from 'framer-motion';
import { Line, TypeWriter } from 'components';
import { generateAlignments } from 'utils';
import { TYPE_WORDS } from 'consts';
import { useGeneric } from 'hooks';

const LandingTypeWriter = () => {
  const { isMobile } = useGeneric();

  return (
    <div className='flex flex-col justify-center items-center w-full pt-32 h-80vh  xl:pt-10 xl:h-80vh'>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: 'spring',
          stiffness: 100,
        }}
        className='relative flex w-4/5 flex-col xl:flex-row gap-44 md:gap-32 xl:gap-5 text-xl xl:text-4xl 2xl:text-5xl text-center items-center justify-between font-medium text-darkest-black dark:text-text-white'
      >
        <motion.div
          initial={{ opacity: 0, x: -100, y: -100 }}
          animate={{
            opacity: 1,
            x: [-200, -120, 0],
            y: [-100, 200, 0],
          }}
          transition={{
            delay: 0.3,
            stiffness: 10,
            duration: 0.3,
            type: 'spring',
          }}
          className='flex flex-col min-h-28 lg:flex-row  gap-5'
        >
          <div>Sites need to be </div>
          <TypeWriter typeContent={TYPE_WORDS} />
        </motion.div>

        <div className='flex relative ml-36 p-8 bg-green-500 md:ml-64 xl:p-20 lg:p-16 md:p-12 rounded-full'>
          {generateAlignments(isMobile).map(({ x, y }, i) => {
            return <Line key={i} className={`${x} ${y}`} />;
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default LandingTypeWriter;
