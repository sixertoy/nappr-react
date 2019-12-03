import { getPercentage } from '@iziges/napper-core/lib/maths';
import React from 'react';

const Percentage = (percent, value) => {
  const result = getPercentage(percent, value);
  return <span>{result}&nbsp;%</span>;
};

export default Percentage;
