import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Line = ({ animate, className }) => {
  return (
    <motion.div
      className={`w-7 p-1 bg-blue-500 rounded-s-md ${className}`}
      {...animate}
    />
  );
};

Line.propTypes = {
  className: PropTypes.string,
  animate: PropTypes.object,
};

export default Line;
