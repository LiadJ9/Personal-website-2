import { motion } from 'framer-motion';
import { BOX_CONTENTS } from '../../consts';
import Tab from '../Tab';

const LandingDesigns = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-80vh bg-gradient-to-b from-cyan-600  via-cyan-700 to-cyan-600 dark:from-m-blue dark:via-cyan-700 dark:to-cyan-800'>
      <div className='flex w-4/5 justify-between'>
        <div className='flex flex-row max-w-xl flex-wrap gap-5'>
          <Tab>
            {BOX_CONTENTS.map(({ Component, props }, index) => (
              <Component key={index} {...props} />
            ))}
          </Tab>
        </div>
        <motion.div
          transition={{ delay: 0.3 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='flex flex-col gap-5'
        >
          <div className='text-xxl text-right'>
            Reusable Components, simplified
          </div>
          <div className='text-xl text-right max-w-3xl h-fit'>
            {
              "I believe that prioritizing reusability is one of the cornerstones of efficient development design. Through extensive experience on large-scale projects, I had time to realize what works and what doesn't in crafting versatile, streamlined components that mitigate the need for excessive prop-drilling"
            }
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingDesigns;