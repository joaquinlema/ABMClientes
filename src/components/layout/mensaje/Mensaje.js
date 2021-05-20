import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { Button } from '@material-ui/core';

export default function Mensaje({open, cerrarMsj, mensaje}) {
    const cerrar = (
        <Button size="small" onClick={cerrarMsj}>
          Cerrar
        </Button>
      );
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={cerrarMsj}
        message={mensaje}
        action={
            cerrar
        }
      />
    </div>
  );
}