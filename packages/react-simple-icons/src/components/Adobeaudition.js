import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Adobeaudition = forwardRef(function Adobeaudition(
  { color = 'currentColor', size = 24, title = 'Adobe Audition', ...others },
  ref
) {
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
      <path d="M6.786 13.55l-.792 3c-.017.083-.05.1-.149.1H4.377c-.1 0-.116-.033-.1-.148l2.839-9.943c.049-.181.082-.315.1-.81 0-.066.033-.1.082-.1h2.1c.066 0 .1.017.115.1l3.185 10.769c.016.083 0 .132-.083.132H10.96c-.082 0-.132-.021-.148-.087l-.825-3.013zm2.788-1.625c-.28-1.1-.94-3.529-1.188-4.7H8.37c-.215 1.171-.743 3.149-1.155 4.7zm9.876 3.049c0 .115.017.462.05 1.023a.1.1 0 0 1-.092.116c-.874.33-1.825.676-3.046.676-1.5 0-2.937-.577-2.937-2.887v-5.27c0-.082.033-.132.116-.132h1.569c.082 0 .115.05.115.132v5.055c0 .974.387 1.5 1.41 1.5a2.794 2.794 0 0 0 1.015-.182V8.632c0-.082.033-.132.116-.132h1.569c.1 0 .115.05.115.132zM0 .3v23.4h24V.3zm1 1h22v21.4H1Z" />
    </svg>
  );
});

Adobeaudition.propTypes = {
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

export default Adobeaudition;