import React from 'react';
import Pdf from "react-to-pdf";
import { Grid, Divider,IconButton } from '@material-ui/core';
import moment from 'moment';
import Styles from './styles';
import PrintIcon from '@material-ui/icons/Print';


export default function Historial() {
    const ref = React.createRef();
    const options = {
        orientation: 'p',
        unit: 'in',
        format: 'a4',
        putOnlyUsedFonts: true,
        floatPrecision: 16 // 

    };
    const classes = Styles();
    return (
        <>
            <Grid container className={classes.gridDate}>
                <Grid item xs={6} md={6}>
                    <label className={classes.label}>{moment().format('MMMM Do YYYY, h:mm:ss a')}</label>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Pdf targetRef={ref} filename='Historial.pdf'>
                   
                        {({ toPdf }) =>  <IconButton title={"Exportar"} onClick={toPdf} options={options} ><PrintIcon/></IconButton>}
                    </Pdf>
                </Grid>
            </Grid>
            <Grid container className={classes.root} ref={ref}>
                <Grid item xs={6} md={6} className={classes.gridItem}>
                    <h5 className={classes.titlePago}>{"Pago parcial USD"}</h5>
                </Grid>
                <Grid item xs={6} md={6} className={classes.gridItem}>
                    <h5 className={classes.montoPago}>{"500"}</h5>
                </Grid>
                <Grid item xs={6} md={6} className={classes.gridItem}>
                    <h5 className={classes.titlePago}>{"Pago parcial ARS"}</h5>
                </Grid>
                <Grid item xs={6} md={6} className={classes.gridItem}>
                    <h5 className={classes.montoPago}>{"500"}</h5>
                </Grid>
                <Grid item xs={12} md={12} className={classes.gridItem}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={12} className={classes.gridItem}>
                    <label className={classes.detalleLabel}>{"Detalle de la operacion"}</label>
                </Grid>
                <Grid item xs={6} md={6} className={classes.gridItem}>
                    <label className={classes.label}>{"Cotización"}</label>
                </Grid>
                <Grid item xs={6} md={6} className={classes.gridItem}>
                    <label className={classes.label}>{"100"}</label>
                </Grid>
                <Grid item xs={12} md={12} className={classes.gridItem}>
                    <label className={classes.label}>{"Dinero Defectuoso"}</label>
                </Grid>
                <Grid item xs={6} md={6} className={classes.gridItem}>
                    <label className={classes.label}>{"Reclamar"}</label>
                </Grid>
                <Grid item xs={6} md={6} className={classes.gridItem}>
                    <label className={classes.label}>{"100 USD"}</label>
                </Grid>
                <Grid item xs={6} md={6} className={classes.gridItem}>
                    <label className={classes.label}>{"Desestimar"}</label>
                </Grid>
                <Grid item xs={6} md={6} className={classes.gridItem}>
                    <label className={classes.label}>{"100 USD"}</label>
                </Grid>
                <Grid item xs={12} md={12} className={classes.gridItem}>
                    <label className={classes.detalleLabel}>{"Información adicional"}</label>
                </Grid>
                <Grid item xs={12} md={12} className={classes.gridItem}>
                    <label className={classes.label}>{"Una linea de texto de informacion adicional"}</label>
                </Grid>
            </Grid>
        </>
    )
}
