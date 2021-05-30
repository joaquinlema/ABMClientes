import Axios from 'axios';
import { 
    SET_ERROR,
    SET_LOADING,
    SET_GUARDAR_COMPRA 
} from './types';

export const setLoading = () => {
    return{
        type: SET_LOADING
    }
}


export const setGuardarCompra= () => async dispatch => {
    try {
        dispatch({
            type: SET_GUARDAR_COMPRA,  
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}