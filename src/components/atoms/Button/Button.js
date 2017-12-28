import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './css/Button.css';
const cx = classNames.bind(styles);

const Button = ({ label, color, size, handleClick }) => {
  const baseClasses = cx({
    'a-button': true,
    'a-button--color-primary': (color === 'primary'),
    'a-button--color-secondary': (color === 'secondary'),
    'a-button--color-dark': (color === 'dark'),
    'a-button--size-s': (size === 's'),
    'a-button--size-m': (size === 'm'),
    'a-button--size-l': (size === 'l'),
  });

  return (
    <button
      className={baseClasses}
      onClick={handleClick}
      >
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: 'Button',
  color: 'primary',
  size: 's',
  handleClick: () => console.log('you pressed the button'),
};

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
