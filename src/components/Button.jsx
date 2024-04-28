import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = ({
  buttonStyle,
  children,
  className,
  onClick,
  type = 'button',
  ariaLabel,
}) => {
  const buttonStyles = {
    purple: 'bg-purple-500 hover:bg-purple-700 text-white font-bold rounded',
    white: 'bg-transparent text-text-white hover:text-green-500 transition-all',
  };

  return (
    <button
      className={clsx('p-1 flex items-center justify-center', {
        [buttonStyles[buttonStyle]]: buttonStyle,
        [className]: className,
      })}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  buttonStyle: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
  props: PropTypes.any,
  ariaLabel: PropTypes.string,
};

export default Button;
