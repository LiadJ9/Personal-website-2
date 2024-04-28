import { motion } from 'framer-motion';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Tab = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={clsx(
        'flex flex-col gap-4 bg-white p-3 rounded-lg shadow-sm text-darkest-black',
        {
          [className]: className,
        }
      )}
    >
      {children}
    </motion.div>
  );
};

Tab.propTypes = { className: PropTypes.string, children: PropTypes.node };

export default Tab;
