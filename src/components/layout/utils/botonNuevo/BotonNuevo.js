import { Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
buttonStyle: {
    background: '#5974FB',
    borderRadius: '4px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '16px',
    textAlign: 'center',
    color: '#FFFFFF',
    width: '215px',
    height: '40px',
    textTransform: 'none',
    fontFamily: "Titillium Web"
}
}));

const BotonNuevo = ({accion, label}) => {
    const classes = useStyles();

    return (
        <Button
        variant="contained"
        className={classes.buttonStyle}
        onClick={accion}
      >
        {label}
      </Button>
    );
}

export default BotonNuevo;
