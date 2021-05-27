import { Grid } from '@material-ui/core';
import React from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import {abrirFormularioUsuario, cerrarMensajeUsuario} from '../../actions/UsuarioActions'; 
import FormularioUsuario from '../layout/usuarios/form/FormularioUsuario';
import DialogoGeneral from '../layout/utils/dialogUtil/DialogGeneral';
import Mensaje from '../layout/utils/mensaje/Mensaje';
import TablaUsuarios from '../layout/usuarios/tablaUsuarios/TablaUsuarios';

const UsuarioPage = () => {

    const {abrirFormularioStatus, mostrarMensaje, textoMensaje} = useSelector(state => state.UsuarioReducer);
    const dispatch = useDispatch();

    return (
        <Grid container direction="row">
            <Grid>
                <Mensaje open={mostrarMensaje} mensaje={textoMensaje} cerrarMsj={() => dispatch(cerrarMensajeUsuario())}/>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                <TablaUsuarios />
            </Grid>

            <Grid container item xs={12} sm={12} md={4} lg={4}>
                <DialogoGeneral open={abrirFormularioStatus} cerrar={() => dispatch(abrirFormularioUsuario)} contenido={<FormularioUsuario />} />
            </Grid>
        
        </Grid>
    );
}

export default UsuarioPage;
