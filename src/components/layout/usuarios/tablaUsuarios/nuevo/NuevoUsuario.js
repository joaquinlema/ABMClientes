import React from 'react';
import { useDispatch } from 'react-redux';
import {abrirFormularioUsuario} from '../../../../../actions/UsuarioActions';
import BotonNuevo from '../../../utils/botonNuevo/BotonNuevo';

const NuevoUsuario = () => {

    const dispatch = useDispatch();

    return (
       <BotonNuevo accion={() => dispatch(abrirFormularioUsuario(true))}   classButton={"buttonStyle"} label={'Nuevo Usuario'} />
    );
}

export default NuevoUsuario;
