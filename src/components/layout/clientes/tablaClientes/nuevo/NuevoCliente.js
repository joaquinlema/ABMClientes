import React from 'react';
import { useDispatch } from 'react-redux';
import {abrirFormularioCliente} from '../../../../../actions/ClienteActions';
import BotonNuevo from '../../../utils/botonNuevo/BotonNuevo';

const NuevoCliente = () => {

    const dispatch = useDispatch();

    return (
       <BotonNuevo accion={() => dispatch(abrirFormularioCliente())} label={'Nuevo Cliente'} />
    );
}

export default NuevoCliente;
