import { Grid } from '@material-ui/core';
import React from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import {abrirFormularioCliente, cerrarMensajeCliente} from '../../actions/ClienteActions'; 
import FormularioCliente from '../layout/clientes/form/FormularioCliente';
import DialogoGeneral from '../layout/utils/dialogUtil/DialogGeneral';
import Mensaje from '../layout/utils/mensaje/Mensaje';
import TablaClientes from '../layout/clientes/tablaClientes/TablaClientes';

const ClientePage = () => {

    const {abrirFormularioStatus, mostrarMensaje, textoMensaje} = useSelector(state => state.ClienteReducer);
    const dispatch = useDispatch();

    return (
        <Grid container direction="row">
            <Grid>
                <Mensaje open={mostrarMensaje} mensaje={textoMensaje} cerrarMsj={() => dispatch(cerrarMensajeCliente())}/>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                 <TablaClientes /> 
            </Grid>

            <Grid container item xs={12} sm={12} md={4} lg={4}>
                <DialogoGeneral open={abrirFormularioStatus} cerrar={() => dispatch(abrirFormularioCliente)} contenido={<FormularioCliente />} />
            </Grid>
        
        </Grid>
    );
}

export default ClientePage;
