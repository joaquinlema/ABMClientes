import {
    DELETE_USER,
    GET_USERS,
    SET_ERROR,
    STATUS_FORMULARIO,
    UPDATE_USER,
    CERRAR_MENSAJE,
    GET_USERS_ROL,
    SET_USER_ELIMINAR,
    GET_BRANCH_OFFICE
} from './types';

import axios from 'axios';
import UserDTO from '../DTO/UserDTO'

export const getUsuarios = () => async dispatch => {
    try {
        const { data } = await axios.get('https://localhost:44321/api/User/');
            
        dispatch({
            type: GET_USERS,
            payload: UserDTO.getAllUser(data.listUserDTO)
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const setDeleteUser = (elem) => async dispatch => {
    try {
        const { userId } = elem;
        const { data } = await axios.get('https://localhost:44321/api/User/' + userId);

        dispatch({
            type: SET_USER_ELIMINAR,
            payload:UserDTO.getUser(data.data.user)
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
        const { userId } = elem;
        const { data } = await axios.get('https://localhost:44321/api/User/' + userId);

        dispatch({
            type: UPDATE_USER,
            payload:  UserDTO.getUser(data.data.user)
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}


export const deleteUser = (userId) => async dispatch => {
    try {
       
        const { data } = await axios.delete('https://localhost:44321/api/User/' + userId,{data:{userId: userId}});
        dispatch({
            type: DELETE_USER,
            payload: userId
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const abrirFormularioUsuario = (status) => dispatch => {
    dispatch(getUsuarioRol());
    dispatch({
        type: STATUS_FORMULARIO,
        payload: status
    });

}

export const getUsuarioRol = () => async dispatch => {
    
    dispatch({
        type: GET_USERS_ROL,
        payload: UserDTO.getUsersRols()
    });

}


export const getSucursales = () => async dispatch => {
    try {
        const { data } = await axios.get('https://localhost:44321/api/BranchOffice/');
        dispatch({
            type: GET_BRANCH_OFFICE,
            payload: data.listBranchOffices
        });
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });
    }
}

export const cerrarMensajeUsuario = () => dispatch => {

    dispatch({
        type: CERRAR_MENSAJE,
    });

}