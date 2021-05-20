import { Grid } from '@material-ui/core';
import React from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import {abrirFormularioCliente} from '../../actions/ClienteActions'; 
import NuevoCliente from '../layout/clientes/tablaClientes/nuevo/NuevoCliente';
import FormularioCliente from '../layout/clientes/form/FormularioCliente';
import DialogoGeneral from '../layout/dialogUtil/DialogGeneral';

const ClientePage = () => {

    const {abrirFormularioStatus, tituloFormulario} = useSelector(state => state.ClienteReducer);
    const dispatch = useDispatch();
    return (
        <Grid
        container
        direction="row"
        >
        <Grid container item xs={12} sm={12} md={8} lg={8}>
            <NuevoCliente />
        </Grid>

        <Grid container item xs={12} sm={12} md={4} lg={4}>
            <DialogoGeneral open={abrirFormularioStatus} tituloFormulario={tituloFormulario} onClose={dispatch(abrirFormularioCliente)} formulario={<FormularioCliente />} />
        </Grid>
        
    </Grid>
    );
}

export default ClientePage;
