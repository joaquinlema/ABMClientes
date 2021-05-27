import {
    DELETE_CLIENT,
    GET_CLIENTS,
    SET_ERROR,
    STATUS_FORMULARIO_CLIENTE,
    UPDATE_CLIENT,
    CERRAR_MENSAJE
} from './typesCliente';

import axios from 'axios';

export const getClients = () => async dispatch => {
    try {
        const { data } = await axios.get('/api/clients');

        dispatch({
            type: GET_CLIENTS,
            payload: data.clientes
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const setEditClient = (elem) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_CLIENT,
            payload: elem
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}


export const deleteClient = (id) => async dispatch => {
    try {
        // eslint-disable-next-line no-unused-vars
        const { data } = await axios.post('/api/clients/delete/'+id);
        dispatch({
            type: DELETE_CLIENT,
            payload: id
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const abrirFormularioCliente = (status)  => dispatch => {
      
    dispatch({
        type: STATUS_FORMULARIO_CLIENTE,
        payload: status
    });

}

export const cerrarMensajeCliente = ()  => dispatch => {
      
    dispatch({
        type: CERRAR_MENSAJE,
    });

}