import { Grid } from '@material-ui/core';
import React from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import NuevaCompra from '../form/FormularioMoneda'



const ClientePage = () => {

    // const {abrirFormularioStatus, mostrarMensaje, textoMensaje} = useSelector(state => state.ClienteReducer);
    // const dispatch = useDispatch();

    return (
        <Grid container direction="row">
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                <NuevaCompra />
            </Grid>        
        </Grid>
    );
}

export default ClientePage;
