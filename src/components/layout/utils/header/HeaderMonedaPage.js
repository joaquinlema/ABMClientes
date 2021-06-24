import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    titulo: {
        fontFamily: 'Titillium Web',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '34px',
        lineHeight: '36px',
        color: '#5974FB',
        marginTop:'53px'
    },
    grid:{
        marginLeft:'10px'
    }
}));

const HeaderMonedaPage = ({titulo, botonCompra,botonVenta}) => {
    const classes = useStyles();

    return (
        <Fragment>
            <Grid item xs={6} sm={6} md={6} lg={6}>
                <span className={classes.titulo}>{titulo}</span>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} container justify="flex-end">
                <Grid item xs={6} md={6} >
                    {botonCompra}
                </Grid>
                <Grid item xs={6} md={6}>
                    {botonVenta}
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default HeaderMonedaPage;
