import { compose } from '@iziges/napper-core/lib/fp';
import React from 'react';
import { createUseStyles } from 'react-jss';
import withSizes from 'react-sizes';
import { withTheme as withTheming } from 'theming';

export const withTheme = (styles = {}) => {
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

    return compose(withSizes(mapSizeToProps), withTheming)(StyledComponent);
  };
};

export default withTheme;
