import { Grid } from '@material-ui/core';
import React from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import {abrirFormularioCliente, cerrarMensajeCliente} from '../../actions/ClienteActions'; 
import FormularioCliente from '../layout/clientes/form/FormularioCliente';
import DialogoGeneral from '../layout/utils/dialogUtil/DialogGeneral';
import Mensaje from '../layout/utils/mensaje/Mensaje';
import TablaMoneda from '../layout/moneda/tablaMoneda/TablaMoneda';

const MonedaPage = () => {

    const {abrirFormularioStatus, mostrarMensaje, textoMensaje} = useSelector(state => state.ClienteReducer);
    const dispatch = useDispatch();

    return (
        <Grid container direction="row">
            <Grid>
                <Mensaje open={mostrarMensaje} mensaje={textoMensaje} cerrarMsj={() => dispatch(cerrarMensajeCliente())}/>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                 <TablaMoneda /> 
            </Grid>
        </Grid>
    );
}

export default MonedaPage;
