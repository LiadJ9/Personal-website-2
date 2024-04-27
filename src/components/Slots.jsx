import { useEffect, useRef } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Button from './Button';
import { shuffleArray } from '../utils';
import { SPIN_ANIMATION } from '../consts';

const SlotMachine = ({ itemList }) => {
  const viewRef = useRef(null);
  const isInView = useInView(viewRef);
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start({
        y: SPIN_ANIMATION,
      });
    }
  }, [isInView]);

  return (
    <div className='flex flex-row items-center gap-16'>
      <div className='flex flex-row overflow-hidden gap-10 h-fit'>
        {itemList.map((items, index) => (
          <div
            ref={viewRef}
            className='flex flex-col gap-5 size-44 overflow-hidden'
            key={index}
          >
            <motion.div
              animate={controls}
              initial={{ y: 1000 }}
              transition={{
                stiffness: 100,
                duration: 2,
                delay: index * 0.1,
              }}
              className='flex flex-col gap-10'
            >
              {shuffleArray(items).map((Icon, index) => (
                <motion.div key={index} className='text-6xl'>
                  <Icon className='text-text-white size-44' />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      <Button
        onClick={() => controls.start({ y: SPIN_ANIMATION })}
        className={'material-symbols-outlined text-6xl text-text-white'}
      >
        <motion.div whileHover={{ rotate: 90 }}>refresh</motion.div>
      </Button>
    </div>
  );
};

SlotMachine.propTypes = {
  itemList: PropTypes.array,
};

export default SlotMachine;
