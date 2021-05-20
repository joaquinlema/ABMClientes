import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import {abrirFormularioCliente} from '../../../../../actions/ClienteActions';
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
    textTransform: 'none'
}
}));

const NewButton = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Button
        variant="contained"
        className={classes.buttonStyle}
        onClick={() => dispatch(abrirFormularioCliente(true))}
      >
        Nuevo Cliente
      </Button>
    );
}

export default NewButton;
