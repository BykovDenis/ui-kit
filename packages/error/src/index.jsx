import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ErrorTitle } from '../formatted-messages';

const styles = theme => ({
  container: {
    margin: 'auto',
  },
  shapeError: {
    position: 'relative',
    margin: '20px auto',
    width: '150px',
    height: '150px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '50%',
    filter: 'drop-shadow(0 2px 5px #000000)',
    '&:before': {
      position: 'absolute',
      content: '""',
      top: '50%',
      left: '50%',
      width: '70%',
      height: '3px',
      backgroundColor: '#ffffff',
      transformOrigin: 'center',
      transform: 'translate(-50%, -50%) rotate(45deg)',
      filter: 'drop-shadow(2px 0 2px #000000)',
    },
    '&:after': {
      position: 'absolute',
      content: '""',
      top: '50%',
      left: '50%',
      width: '3px',
      height: '70%',
      backgroundColor: '#ffffff',
      transformOrigin: 'center',
      transform: 'translate(-50%, -50%) rotate(45deg)',
      filter: 'drop-shadow(0 2px 2px #000000)',
    },
  },
});

function ErrorComponent(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <ErrorTitle /> {props.message}
      <div className={classes.shapeError} />
    </div>
  );
}

ErrorComponent.propTypes = {
  message: PropTypes.string,
};

export default withStyles(styles)(ErrorComponent);
