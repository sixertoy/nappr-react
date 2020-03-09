import React from 'react';
import { createUseStyles } from 'react-jss';
import { withTheme } from 'theming';

export const withStyles = (styles = {}) => {
  const useStyles = createUseStyles(styles);
  return WrappedComponent => {
    const StyledComponent = props => {
      const classes = useStyles({ ...props });
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <WrappedComponent {...props} classes={classes} />;
    };

    return withTheme(StyledComponent);
  };
};

export default withStyles;
