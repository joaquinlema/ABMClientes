import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import BotonNuevo from '../botonNuevo/BotonNuevo';
import './popupestilo.css';

export default function ConfirmarPopUp({status, cerrar, titulo, mensaje, accionBoton, labelBoton}) {
    
    const handleClose = () => {
        cerrar(false);
      };
    
  return (
    <Fragment>
      <Dialog
        open={status}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='popupConfirmacion'
      >
        <DialogTitle id="alert-dialog-title" className='titulo'>{titulo}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {mensaje}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button size="small" className='cancelar' onClick={handleClose} >
            Cancelar
          </Button>
          <BotonNuevo accion={() => {accionBoton(); handleClose();}} label={labelBoton} />
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}