import PropTypes from 'prop-types';
import React from 'react';

const Link = ({ children, cssobj, href }) => (
  <a className={cssobj} href={href}>
    {children}
  </a>
);

Link.defaultProps = {
  cssobj: {},
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  cssobj: PropTypes.shape(),
  href: PropTypes.string.isRequired,
};

export default Link;
