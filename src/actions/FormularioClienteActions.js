import Axios from 'axios';
import {
    SET_ERROR,
    SET_LOADING,
    SET_NEW_CLIENT,
    UPDATE_CLIENT_LIST,
} from './typesCliente';

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export const createClient = (newValues) => async dispatch => {

    try {
        const { data } = await Axios.post('https://localhost:44321/api/Client', {
            alias: newValues.alias,
            nombre: (newValues.nombre) ? (newValues.nombre) : "",
            telefono: newValues.telefono,
            email: newValues.mail,
            dni: (newValues.dni) ? newValues.dni : 0,
            cuil: (newValues.cuil) ? newValues.cuil : 0,
            direccion: newValues.direccion,
            clearingCompra: (newValues.clearingCompra) ? newValues.clearingCompra : 0,
            clearingVenta: (newValues.clearingVenta) ? newValues.clearingVenta : 0,
            comisionCompra: (newValues.comisionCompra) ? newValues.comisionCompra : 0,
            comisionVenta: (newValues.comisionVenta) ? newValues.comisionVenta : 0,
            tasaMensualCompra: (newValues.tasaMensualCompra) ? newValues.tasaMensualCompra : 0,
            tasaMensualVenta: (newValues.tasaMensualVenta) ? newValues.tasaMensualVenta : 0
        });

        dispatch({
            type: SET_NEW_CLIENT,
            payload: data.result
        })

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const editClient = (newValues, id) => async dispatch => {
    try {
        const { data } = await Axios.put('https://localhost:44321/api/Client/' + id, {
            clientId: id,
            alias: newValues.alias,
            nombre: newValues.nombre,
            telefono: newValues.telefono,
            email: newValues.email,
            dni: newValues.dni,
            cuil: newValues.cuil,
            direccion: newValues.direccion,
            clearingCompra: newValues.clearingCompra,
            clearingVenta: newValues.clearingVenta,
            comisionCompra: newValues.comisionCompra,
            comisionVenta: newValues.comisionVenta,
            tasaMensualCompra: newValues.tasaMensualCompra,
            tasaMensualVenta: newValues.tasaMensualVenta
        });

        dispatch({
            type: UPDATE_CLIENT_LIST,
            payload: data.cliente
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}