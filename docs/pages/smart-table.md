# withStyles

#### Dependencies

- [react-jss](https://github.com/cssinjs/react-jss)
- [theming](https://github.com/cssinjs/theming)

#### Usage

```jsx
// App.jsx
import React from 'react';
import { ThemeProvider } from 'react-jss';

const theme = {
  colorPrimary: 'green',
};

const App = () => (
  <ThemeProvider theme={theme}>
    <MainLayout />
  </ThemeProvider>
);
```

```jsx
// myComponent.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@iziges/napper-core-react';

const styles = theme => ({
  container: {
    color: theme.colorPrimary,
  },
});

const MyComponent = ({ classes }) => (
  <div className={classes.container}>
    <span>Hello World</span>
  </div>
);

MyComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(MyComponent);
```
