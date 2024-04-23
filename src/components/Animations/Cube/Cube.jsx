import clsx from 'clsx';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Cube = ({ animate, className }) => {
  return (
    <motion.div
      className={clsx('w-20 h-20 bg-text-white', { [className]: className })}
      {...animate}
    />
  );
};

Cube.propTypes = {
  className: PropTypes.string,
  animate: PropTypes.object,
};

export default Cube;
