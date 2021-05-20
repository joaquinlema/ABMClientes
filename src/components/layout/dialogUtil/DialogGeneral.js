import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';

export default function DialogoGeneral({open, onClose, tituloFormulario, formulario}) {

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{tituloFormulario}</DialogTitle>
        <DialogContent>
            {formulario}
        </DialogContent>
      </Dialog>
    </div>
  );
}