import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import BotonNuevo from '../botonNuevo/BotonNuevo';
import './popupestilo.css';

export default function ConfirmarPopUp({status, cerrar}) {
    
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
      >
        <DialogTitle id="alert-dialog-title" className='titulo'>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button size="small" className='cancelar' onClick={handleClose} >
            Cancelar
          </Button>
          <BotonNuevo accion={handleClose} label='Si Eliminar' />
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}