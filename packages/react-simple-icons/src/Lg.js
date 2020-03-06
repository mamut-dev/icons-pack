import React from 'react';
import PropTypes from 'prop-types';

const Lg = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M5.287 6.714a5.286 5.286 0 1 0 0 10.572 5.287 5.287 0 0 0 0-10.572zm0 .86c.05 0 .156 0 .21.002v.413a14.621 14.621 0 0 0-.21-.003 3.986 3.986 0 0 0-2.836 1.175 3.982 3.982 0 0 0-1.175 2.836c0 1.072.417 2.08 1.175 2.836a3.986 3.986 0 0 0 2.836 1.175 4.019 4.019 0 0 0 4.003-3.741v-.06H6.552v-.41h2.981l.177-.001v.201a4.394 4.394 0 0 1-1.294 3.128 4.4 4.4 0 0 1-3.13 1.296c-1.18 0-2.291-.46-3.13-1.296a4.394 4.394 0 0 1-1.293-3.128 4.43 4.43 0 0 1 4.424-4.425zm16.062.878c-2.21 0-3.372 1.207-3.372 3.508 0 2.29 1.05 3.53 3.361 3.53 1.06 0 2.098-.27 2.662-.665v-3.316h-2.74v1.274h1.285v1.195c-.237.09-.699.181-1.139.181-1.42 0-1.895-.722-1.895-2.188 0-1.398.451-2.222 1.872-2.222.79 0 1.241.248 1.613.722l.982-.902c-.598-.857-1.647-1.117-2.629-1.117zm-8.413.102v6.834h4.85v-1.33h-3.27V8.553zM3.599 9.677a.635.635 0 1 1 0 1.27.635.635 0 0 1 0-1.27zm1.478.002h.42v4.22h1.052v.414H5.077z" />
    </svg>
  );
};

Lg.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Lg.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Lg;