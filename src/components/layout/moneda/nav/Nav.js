import React from 'react';
import { Grid } from '@material-ui/core';
import BotonComprar from '../../utils/botonNuevo/BotonNuevo';
import IconButtons from '../../utils/iconButton/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Styles from './styles';




const NavMoneda = ({CloseNav,accionCompra}) => {
   const classes = Styles();
  
    return (
        <Grid  className={classes.root} container direction="row">
                <Grid item xs={1} sm={1} md={1} lg={1} className={classes.grid}>
                    <IconButtons ICON_BUTTON={<CloseIcon className={classes.icono}/>} ICON_ACCION={CloseNav} />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} >
                    <h5 className={classes.textNueva}>Nueva Compra de moneda</h5>
                </Grid>
                <Grid item xs={4} sm={2} md={2} lg={2} className={classes.gridGuardar} >
                    <label className={classes.textGuardar}>Guardar como borrador</label>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} className={classes.grid}>
                    <BotonComprar label={'Comprar'} accion={accionCompra}/>
                </Grid>
        </Grid>
    );
}

export default NavMoneda;
