function getMessage(propName, componentName) {
  return (
    `Invalid prop \`${propName}\` supplied to` +
    ` \`${componentName}\`. Validation failed.`
  );
}

function timestamp(props, propName, componentName) {
  const value = props[propName];
  const isvalid = typeof value === 'number';
  if (isvalid) return null;
  return new Error(getMessage(propName, componentName));
}

export default {
  timestamp,
};
