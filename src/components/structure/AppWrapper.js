import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  app: {
    display: 'flex',
    flexFlow: 'column nowrap',
    minHeight: '100vh',
  },
  withSplashScreen: {
    height: '100vh',
    overflow: 'hidden',
  },
});

const AppWrapper = ({ style, classes, children }) => (
  // Double wrap for IE bug on flex and min-height
  <div className={classes.app} style={style}>
    <div className={classes.app}>{children}</div>
  </div>
);
AppWrapper.propTypes = {
  style: PropTypes.object,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
AppWrapper.defaultProps = {
  style: {},
};

export default withStyles(styles)(AppWrapper);
