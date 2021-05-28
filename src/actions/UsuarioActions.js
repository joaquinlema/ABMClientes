import {
    DELETE_USER,
    GET_USERS,
    SET_ERROR,
    STATUS_FORMULARIO,
    UPDATE_USER,
    CERRAR_MENSAJE,
    GET_USERS_ROL
} from './types';

import axios from 'axios';

export const getUsuarios = () => async dispatch => {
    try {
        const { data } = await axios.get('/api/users');

        dispatch({
            type: GET_USERS,
            payload: data.users
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const setEditUser = (elem) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_USER,
            payload: elem
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}


export const deleteUser = (id) => async dispatch => {
    try {
        // eslint-disable-next-line no-unused-vars
        const { data } = await axios.post('/api/users/delete/'+id);
        dispatch({
            type: DELETE_USER,
            payload: id
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const abrirFormularioUsuario = (status) =>  dispatch => {
    dispatch(getUsuarioRol());
    dispatch({
        type: STATUS_FORMULARIO,
        payload: status
    });

}

export const getUsuarioRol = () => async dispatch => {
    try {
        const { data } = await axios.get('/api/users/roles');

        dispatch({
            type: GET_USERS_ROL,
            payload: data.rols
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const cerrarMensajeUsuario = ()  => dispatch => {
      
    dispatch({
        type: CERRAR_MENSAJE,
    });

}