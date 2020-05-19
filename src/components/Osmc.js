import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Osmc = forwardRef(function Osmc({ color = 'currentColor', size = 24, title = 'OSMC', ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M22.768 12.002c0 5.935-4.829 10.768-10.768 10.768-5.935-.005-10.763-4.833-10.763-10.768 0-5.94 4.828-10.767 10.768-10.767 5.934 0 10.763 4.828 10.763 10.767m.292-4.673a11.913 11.913 0 0 0-2.57-3.813 11.963 11.963 0 0 0-3.813-2.57A11.857 11.857 0 0 0 12.005 0a11.926 11.926 0 0 0-8.486 3.516A11.963 11.963 0 0 0 .948 7.33C.318 8.811.002 10.38.002 12.002s.316 3.192.942 4.673a11.913 11.913 0 0 0 2.57 3.813A11.963 11.963 0 0 0 12 24c1.619 0 3.191-.32 4.673-.942a11.913 11.913 0 0 0 3.813-2.57 11.963 11.963 0 0 0 3.512-8.486c0-1.623-.311-3.191-.938-4.673M8.566 14.631V9.263l2.574 2.684-2.574 2.684zM7.327 6.296v11.422l8.116-8.455v6.767c0 .343.279.618.617.618a.622.622 0 0 0 .622-.622v-9.74l-4.677 4.77-4.678-4.76z" />
    </svg>
  );
});

Osmc.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default Osmc;