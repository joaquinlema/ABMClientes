import { Grid } from '@material-ui/core';
import React from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import {abrirFormularioCliente, cerrarMensajeCliente} from '../../actions/ClienteActions'; 
import NuevaMoneda from '../layout/moneda/operacion/NuevaCompra'
import Mensaje from '../layout/utils/mensaje/Mensaje';

const ClientePage = () => {

    const {abrirFormularioStatus, mostrarMensaje, textoMensaje} = useSelector(state => state.ClienteReducer);
    const dispatch = useDispatch();

    return (
        <Grid container >
            <Grid>
                <Mensaje open={mostrarMensaje} mensaje={textoMensaje} cerrarMsj={() => dispatch(cerrarMensajeCliente())}/>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                <NuevaMoneda />
            </Grid>

        </Grid>
    );
}

export default ClientePage;
