import { getPercentage } from '@iziges/napper-core/lib/maths';
import PropTypes from 'prop-types';
import React from 'react';

const Percentage = ({ percent, value }) => {
  const result = getPercentage(percent, value);
  return <span>{result}&nbsp;%</span>;
};

Percentage.propTypes = {
  percent: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default Percentage;
