import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'inline-block',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      margin: '0 auto'
    },
}));

const Spinner = (props) => {
    const classes = useStyles();
    let { width, height, color } = props;
    width = width || 20;
    height = height || 20;

    return (
      <div className={classes.root} style={{ ...props.cstyle }}>
        <CircularProgress style={{ width, height, color }} disableShrink />
      </div>
    );
};

export default Spinner;
