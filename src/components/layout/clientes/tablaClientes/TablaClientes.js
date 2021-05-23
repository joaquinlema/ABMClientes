import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import HeaderPage from '../../utils/header/HeaderPage';
import EnhancedTable from './tableJ/Table';
import NuevoCliente from '../tablaClientes/nuevo/NuevoCliente';

const TablaClientes = () => {
    return (
        <Fragment>
            <Grid container item xs={12} sm={12} md={12} lg={12} style={{marginLeft:'240px'}}>
                <HeaderPage titulo={'Clientes'} boton={<NuevoCliente />}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{width: '1240px',marginLeft:'240px'}}>
                <EnhancedTable />
            </Grid>
        </Fragment>
    );
}

export default TablaClientes;
