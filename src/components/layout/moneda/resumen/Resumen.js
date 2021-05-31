
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid,Divider } from '@material-ui/core';
import Styles from './styles'
const Resumen = () => {
    const {pagoTotalARS,pagoTotalUSD} = useSelector(state=>state.FormularioMonedaReducer);
    const classes = Styles();

    return (
        <Grid container direction="row" className={classes.root}>
            <Grid  item xs={12} sm={12} md={12} lg={12} className={classes.grid}>
               <label className={classes.labelResumen}>Resumen</label>
            </Grid>
            <Divider className={classes.divider}></Divider>
            <Grid  item xs={12} sm={12} md={12} lg={12} >
               <label className={classes.text}>Pago total en USD</label>
               <h6  className={classes.number}>{pagoTotalUSD}</h6>
            </Grid>
            <Grid  item xs={12} sm={12} md={12} lg={12} >
               <label className={classes.text}>Pago total en ARS</label>
               <h6 className={classes.number}>{pagoTotalARS}</h6>
            </Grid>        
        </Grid>
    );
}

export default Resumen;
