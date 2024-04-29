import { useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Line = ({ className }) => {
  const [initialPos, setInitialPos] = useState({ x: null, y: null });
  const innerDivX = useMotionValue(0);
  const innerDivY = useMotionValue(0);
  const controls = useAnimation();

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { x, y } = initialPos;
    if (x === null && y === null) {
      setInitialPos({ x: clientX, y: clientY });
    } else {
      const deltaX = clientX - x;
      const deltaY = clientY - y;

      const distanceX = Math.abs(innerDivX.get() - clientX / 30);
      const distanceY = Math.abs(innerDivY.get() - clientY / 30);

      controls.start({
        x: deltaX > 0 ? distanceX : -distanceX,
        y: deltaY > 0 ? distanceY : -distanceY,
        transition: {
          transition: { staggerChildren: 0.1 },
          type: 'spring',
        },
      });

      setInitialPos({ x: clientX, y: clientY });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start({ x: 0, y: 0 });
    }, 500);

    return () => clearTimeout(timeout);
  }, [initialPos]);

  return (
    <motion.div
      id='outer-div'
      className={clsx(
        'absolute flex items-center justify-center w-4 h-40 md:w-8 md:h-44 lg:w-8 lg:h-64 xl:w-10 xl:h-80',
        {
          [className]: className,
        }
      )}
      animate={controls}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        id='inner-div'
        className={clsx(
          'absolute p-1 w-4 h-40 lg:w-5 lg:h-52 xl:w-7 xl:h-64 bg-darkest-black dark:bg-text-white rounded-xl'
        )}
      />
    </motion.div>
  );
};

Line.propTypes = {
  className: PropTypes.string,
  animate: PropTypes.object,
};

export default Line;
