import { useEffect, useRef, useState } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Button } from 'components';
import { shuffleArray } from 'utils';
import { SPIN_ANIMATION } from 'consts';

const SlotMachine = ({ itemList }) => {
  const [itemLists, setItemList] = useState(itemList);
  const viewRef = useRef(null);
  const isInView = useInView(viewRef);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      startAnimation();
    }
  }, [isInView]);

  const startAnimation = () => {
    itemList.map((items) => shuffleArray(items));
    setItemList([...itemList]);
    controls.start({ y: SPIN_ANIMATION });
  };

  return (
    <div className='flex flex-row items-center gap-16'>
      <div className='flex flex-row overflow-hidden gap-10 h-fit'>
        {itemLists.map((items, index) => (
          <div
            ref={viewRef}
            className='flex flex-col gap-5 size-14 sm:size-20 lg:size-44 overflow-hidden'
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
              {items.map((Icon, index) => (
                <motion.div key={index} className='text-6xl'>
                  <Icon className='text-text-white size-20 lg:size-44' />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      <Button
        onClick={startAnimation}
        className={'material-symbols-outlined text-6xl text-text-white'}
        aria-label='refresh-btn'
      >
        <motion.div aria-label='refresh-btn' whileHover={{ rotate: 90 }}>
          refresh
        </motion.div>
      </Button>
    </div>
  );
};

SlotMachine.propTypes = {
  itemList: PropTypes.array,
};

export default SlotMachine;
