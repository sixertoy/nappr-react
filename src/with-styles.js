import React from 'react';
import { createUseStyles } from 'react-jss';
import withSizes from 'react-sizes';
import { compose } from 'redux';
import { withTheme } from 'theming';

const withSizesHOC = withSizes(({ height, width }) => ({
  height,
  isMobile: width <= 960,
  width,
}));

export const withStyles = (styles = {}) => {
  const useStyles = createUseStyles(styles);
  return WrappedComponent => {
    const StyledComponent = props => {
      const classes = useStyles({ ...props });
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <WrappedComponent {...props} classes={classes} />;
    };

    return compose(withSizesHOC, withTheme)(StyledComponent);
  };
};

export default withStyles;
