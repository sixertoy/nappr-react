import React from 'react';
import { createUseStyles } from 'react-jss';
import withSizes from 'react-sizes';
import { compose } from 'redux';
import { withTheme } from 'theming';

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

    return compose(withSizes(mapSizeToProps), withTheme)(StyledComponent);
  };
};

export default withStyles;
