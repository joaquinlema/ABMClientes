import React from 'react';
import { useDispatch } from 'react-redux';
import {abrirFormulario} from '../../../../../actions/UsuarioActions';
import BotonNuevo from '../../../utils/botonNuevo/BotonNuevo';

const NewButton = () => {
    const dispatch = useDispatch();

    return (
      <BotonNuevo label={'Nuevo Usuario'} accion={() => dispatch(abrirFormulario(true))} />
     );
}

export default NewButton;
