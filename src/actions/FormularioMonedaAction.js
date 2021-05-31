import axios from 'axios';
import { 
    SET_ERROR,
    SET_LOADING,
    SET_GUARDAR_COMPRA,
    SET_PAGO_USD,
    SET_PAGO_ARS 
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


export const getCotizacion= () => async dispatch => { 
    try {
    //const info = await axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
    
        //   dispatch({
        //     type: GET_COTIZACION,
        //     payload:response.data  
        // });

    } catch (error) {
       console.log(error);

    }
}

export const setPagoUSD=(value)=>dispatch=>{
         dispatch({
             type: SET_PAGO_USD,
           payload:value 
         });
}

export const setPagoARS=(value)=>dispatch=>{
    dispatch({
        type: SET_PAGO_ARS,
      payload:value 
    });
}