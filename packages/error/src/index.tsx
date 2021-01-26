import React from 'react';
import {createStyles, Theme, withStyles} from '@material-ui/core/styles';

interface Props {
  classes: any;
  message: string;
}

const ErrorComponent: React.FunctionComponent<Props> = (props: Props) => {
  const { classes } = props;

  return (
    <div className={classes.container}>
      Error &nbsp;{props.message}
      <div className={classes.shapeError} />
    </div>
  );
}


const styles = (theme: Theme) => createStyles({
  container: {
    margin: 'auto',
    textAlign: 'center',
  },
  shapeError: {
    position: 'relative',
    margin: '20px auto',
    width: '60px',
    height: '60px',
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

export default withStyles(styles)(ErrorComponent);
