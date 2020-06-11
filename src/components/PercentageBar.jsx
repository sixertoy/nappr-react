import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const SIZE_TINY = 1;
const SIZE_SMALL = 3;
const SIZE_NORMAL = 7;
const SIZE_BIG = 15;

const getSizeObject = size => {
  let height = null;
  switch (size) {
    case 'tiny':
      height = SIZE_TINY;
      break;
    case 'small':
      height = SIZE_SMALL;
      break;
    case 'big':
      height = SIZE_BIG;
      break;
    default:
    case 'normal':
      height = SIZE_NORMAL;
      break;
  }
  return {
    borderRadius: height / 2,
    height,
    maxHeight: height,
    minHeight: height,
  };
};

const useStyles = createUseStyles({
  background: ({ size, theme }) => ({
    ...getSizeObject(size),
    background: theme.triangle,
    bottom: 0,
    composes: ['is-absolute'],
    left: 0,
    right: 0,
    top: 0,
    zIndex: 10,
  }),
  percentage: ({ size }) => ({
    ...getSizeObject(size),
    composes: ['is-relative', 'no-overflow'],
    maxWidth: '100%',
    minWidth: '100%',
    width: '100%',
  }),
  progress: ({ size, theme }) => ({
    ...getSizeObject(size),
    background: theme.header,
    bottom: 0,
    composes: ['is-absolute'],
    left: 0,
    top: 0,
    zIndex: 20,
  }),
});

const PercentageBarComponent = React.memo(
  ({ className, count, size, total }) => {
    const theme = useTheme();
    const classes = useStyles({ size, theme });
    const percent = (count * 100) / total;
    const right = `${100 - percent}%`;
    return (
      <div className={classnames(classes.percentage, className)}>
        <span className={classes.background} />
        <span className={classes.progress} style={{ right }} />
      </div>
    );
  }
);

PercentageBarComponent.defaultProps = {
  size: 'small',
  // showCounts: false
};

PercentageBarComponent.propTypes = {
  className: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  // showCounts: PropTypes.bool,
  total: PropTypes.number.isRequired,
};

export default PercentageBarComponent;
