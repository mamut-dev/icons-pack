import React from 'react';
import PropTypes from 'prop-types';

const Nim = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M12.095 2.9s-.92.778-1.857 1.55c-.964-.032-2.856.199-3.88.598C5.412 4.408 4.582 3.7 4.582 3.7s-.709 1.305-1.154 2.07c-.662.377-1.325.8-1.917 1.36C.824 6.84.026 6.482 0 6.471c.911 1.966 1.524 3.935 3.19 5.119 2.654-4.483 14.983-4.07 17.691-.025 1.75-.977 2.43-3.078 3.119-5.018-.075.026-1.012.362-1.619.61-.363-.423-1.217-1.072-1.702-1.385a96.008 96.008 0 00-1.131-2.122s-.794.632-1.715 1.322c-1.243-.246-2.747-.544-4.012-.47A52.988 52.988 0 0112.095 2.9z M.942 10.65l2.189 5.671c3.801 5.366 13.508 5.739 17.74.104 1.001-2.415 2.352-5.808 2.352-5.808-1.086 1.721-2.852 2.909-3.94 3.549-.774.453-2.558.727-2.558.727l-4.684-2.597-4.71 2.545s-1.761-.303-2.558-.701c-1.608-.919-2.69-2.004-3.83-3.49z" />
    </svg>
  );
};

Nim.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Nim.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Nim;