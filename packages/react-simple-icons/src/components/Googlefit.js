import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Googlefit = forwardRef(function Googlefit(
  { color = 'currentColor', size = 24, title = 'Google Fit', ...others },
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
      <path d="M6 1.84c-3.315 0-6 2.678-6 5.982a5.948 5.948 0 001.758 4.23l.54.541L3.502 13.8l2.615-2.603-1.205-1.21-.541-.543a2.273 2.273 0 01-.674-1.622c0-.534.186-1.024.493-1.414a2.3 2.3 0 013.448-.198l.538.522 1.213 1.2c-1.96 1.96-3.923 3.914-5.887 5.868l1.403 1.407 1.209 1.203 3.27 3.274-.004.003L12 22.16l2.616-2.475h-.001l-.002-.002 5.885-5.883 1.744-1.747c1.22-1.215 1.917-3.09 1.727-4.983-.288-2.865-2.662-5.016-5.544-5.213a6 6 0 00-4.667 1.736l-1.754 1.743-1.213-1.21-.55-.533A5.995 5.995 0 006 1.841zm11.96 3.688a2.303 2.303 0 012.32 1.963 2.286 2.286 0 01-.657 1.959l-1.744 1.747-5.882 5.876-3.271-3.263 3.277-3.263 4.368-4.346c.426-.425.99-.663 1.589-.673Z" />
    </svg>
  );
});

Googlefit.propTypes = {
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

export default Googlefit;