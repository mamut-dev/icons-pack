import React from 'react';
import PropTypes from 'prop-types';

const Expo = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M18.22 11.66a2.944 2.944 0 0 0 3.085-2.361 1.93 1.93 0 0 0-1.621-.881 1.932 1.932 0 0 0-1.464 3.241zm-6.886-8.138l4.021-2.327-1.28-.722-5.543 3.21.441.248.84.47 1.521-.88zM15.87.98a.217.217 0 0 1 .142.141l1.863 5.695a.218.218 0 0 1-.094.258 3.798 3.798 0 0 0-1.738 4.27 3.8 3.8 0 0 0 4.05 2.777c.102-.008.2.055.231.152l1.922 5.852a.224.224 0 0 1-.094.258l-5.894 3.578a.224.224 0 0 1-.096.029.219.219 0 0 1-.154-.033l-2.074-1.348a.222.222 0 0 1-.082-.097L9.806 12.84l-6.165 3.657a.22.22 0 0 1-.04.021.209.209 0 0 1-.196-.014l-1.394-.82a.216.216 0 0 1-.086-.286L7.89 3.586a.216.216 0 0 1 .102-.099L13.96.031a.219.219 0 0 1 .219-.004L15.87.98zM9.63 4.805l-1.165-.657-.285-.16L2.41 15.41l1.047.617 4.972-6.761a.216.216 0 0 1 .204-.09c.079.008.146.06.176.133L14.23 22.28l1.45.939-5.803-17.67-.246-.744zm10.054 7.918a2.373 2.373 0 1 1 1.676-4.052 2.37 2.37 0 0 1 .694 1.676 2.37 2.37 0 0 1-2.37 2.376z" />
    </svg>
  );
};

Expo.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Expo.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Expo;