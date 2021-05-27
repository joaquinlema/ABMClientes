import { Grid } from '@material-ui/core';
import React from 'react';




const Resumen = () => {


    return (
        <Grid container direction="row">
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                <NuevaCompra />
            </Grid>        
        </Grid>
    );
}

export default Resumen;
