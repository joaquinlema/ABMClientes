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
    width: '50%',
    height: '40px',
    textTransform: 'none',
    fontFamily: "Titillium Web",
    marginLeft: '31px',
    '&:hover': {
      backgroundColor: '#5974FB',
      color: '#FFFFFF',
    }},
    buttonVenta:{
      backgroundColor: '#FFFFFF',
      borderRadius: '4px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '16px',
      textAlign: 'center',
      color: '#5974FB',
      width: '50%',
      height: '40px',
      textTransform: 'none',
      fontFamily: "Titillium Web",
      marginLeft: '31px',
      '&:hover': {
        backgroundColor: '#FFFFFF',
        color: '#5974FB',
      }
    }

  
}));

const BotonNuevo = ({ accion, label, classButton }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={classes[classButton]}
      onClick={accion}
    >
      {label}
    </Button>
  );
}

export default BotonNuevo;
