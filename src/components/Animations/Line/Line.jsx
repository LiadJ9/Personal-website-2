import { useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useGeneric } from 'hooks';

const Line = ({ className }) => {
  const { isMobile } = useGeneric();
  const [initialPos, setInitialPos] = useState({ x: null, y: null });
  const innerDivX = useMotionValue(0);
  const innerDivY = useMotionValue(0);
  const controls = useAnimation();

  const handleMouseMove = (e) => {
    const isTouch = e?.type === 'touchmove';
    const source = isTouch ? e.touches[0] : e;
    const { clientX, clientY } = source;
    const { x, y } = initialPos;
    if (x === null && y === null) {
      setInitialPos({ x: clientX, y: clientY });
    } else {
      const deltaX = clientX - x;
      const deltaY = clientY - y;
      const divider = isTouch ? 8 : 30;
      const distanceX = Math.abs(innerDivX.get() - clientX / divider);
      const distanceY = Math.abs(innerDivY.get() - clientY / divider);
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
        'absolute flex items-center justify-center w-10 h-40 md:w-10 md:h-44 lg:w-8 lg:h-64 xl:w-10 xl:h-80',
        {
          [className]: className,
        }
      )}
      animate={controls}
      onMouseMove={isMobile ? null : handleMouseMove}
      onTouchMove={!isMobile ? null : handleMouseMove}
    >
      <motion.div
        id='inner-div'
        className='absolute p-1 w-4 h-40 lg:w-5 lg:h-52 xl:w-7 xl:h-64 bg-darkest-black dark:bg-text-white rounded-xl'
      />
    </motion.div>
  );
};

Line.propTypes = {
  className: PropTypes.string,
  animate: PropTypes.object,
};

export default Line;
