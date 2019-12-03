import React from 'react';
import { createUseStyles } from 'react-jss';
import withSizes from 'react-sizes';

export const withStyles = (styles = {}) => {
  const useStyles = createUseStyles(styles);

  return WrappedComponent => {
    const StyledComponent = props => {
      const classes = useStyles({ ...props });
      return <WrappedComponent {...props} classes={classes} />;
    };

    const mapSizeToProps = ({ height, width }) => ({
      height,
      isMobile: width <= 960,
      width,
    });

    return withSizes(mapSizeToProps)(StyledComponent);
  };
};

export default withStyles;
