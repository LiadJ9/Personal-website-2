import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { randomArrayItem } from '../utils';
import { RAINBOW_GRADIENTS } from '../consts';

const UserCard = ({ title, text, className }) => {
  const randomGradient = randomArrayItem(RAINBOW_GRADIENTS);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={clsx(
        'flex gap-3 p-3 h-fit rounded-md justify-between bg-m-blue box-shadow-sm',
        { [className]: className }
      )}
    >
      <div
        className={clsx('size-12 min-w-12 rounded-full', {
          [randomGradient]: randomGradient,
        })}
      />
      <div className='flex flex-col'>
        <div className='text-12 text-text-white'>{title}</div>
        <div className='text-8 text-text-white'>{text}</div>
      </div>
    </motion.div>
  );
};

UserCard.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default UserCard;
