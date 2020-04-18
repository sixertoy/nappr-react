import { Maths } from '@nappr/nappr-core';
import PropTypes from 'prop-types';
import React from 'react';

const Percentage = ({ percent, value }) => {
  const result = 0;
  console.log('Maths', Maths);
  // const result = Maths.getPercentage(percent, value);
  return <span>{result}&nbsp;%</span>;
};

Percentage.propTypes = {
  percent: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default Percentage;
