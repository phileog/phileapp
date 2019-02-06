import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// eslint-disable-next-line import/no-mutable-exports
export var contentWrapperPaddingTop;

const styles = theme => {
  contentWrapperPaddingTop = theme.spacing.unit * 4;
  return {
    root: {
      position: 'relative',
      flexGrow: '1',
      backgroundColor: theme.palette.background.default,
      paddingTop: 0,
    },

    content: {
      margin: '0 auto',
      maxWidth: theme.breakpoints.values.lg,
      paddingBottom: theme.spacing.unit * 5,
    },
  };
};

const ContentWrapper = ({ classes, children }) => (
  <div className={classes.root}>
    <div className={classes.content}>{children}</div>
  </div>
);
ContentWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(ContentWrapper);
