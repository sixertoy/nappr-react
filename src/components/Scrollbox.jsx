import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  scrollbox: {
    composes: ['is-scrollbox'],
  },
  scrollboxWrapper: {
    composes: ['is-scrollbox-wrapper'],
  },
});

const Scrollbox = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.scrollboxWrapper}>
      <div className={classes.scrollbox}>{children}</div>
    </div>
  );
};

Scrollbox.defaultProps = {};

Scrollbox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Scrollbox;
