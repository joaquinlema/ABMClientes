import Axios from 'axios';
import { 
    SET_ERROR,
    SET_LOADING, 
    SET_NEW_CLIENT, 
    UPDATE_CLIENT_LIST,
} from './typesCliente';

export const setLoading = () => {
    return{
        type: SET_LOADING
    }
}

export const createClient = (client) => async dispatch => {
    const {alias,telefono,nombre,mail,direccion,dni,cuil,clearingCompra,tasaMensualCompra,comisionCompra,tasaMensualVenta,comisionVenta,clearingVenta} = client;
    try {
        const { data } = await Axios.post('/api/clients', { data: {
            alias: alias, 
            telefono: telefono,
            nombre: nombre, 
            mail:mail, 
            direccion:direccion,
            dni:dni, 
            cuil: cuil, 
            clearingCompra: clearingCompra, 
            tasaMensualCompra: tasaMensualCompra,
            comisionCompra:comisionCompra,
            clearingVenta: clearingVenta, 
            tasaMensualVenta:tasaMensualVenta, 
            comisionVenta:comisionVenta
         } });

        dispatch({
            type: SET_NEW_CLIENT,
            payload: data.cliente
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
        const { data } = await Axios.patch('/api/clientes/edit/'+id, {data: newValues});
        console.log(data);
        dispatch({
            type: UPDATE_CLIENT_LIST,
            payload: data.client
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}