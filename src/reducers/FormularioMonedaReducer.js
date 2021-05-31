import {
    SET_ERROR,
    SET_LOADING,
    SET_GUARDAR_COMPRA,
    GET_COTIZACION,
    SET_PAGO_USD,
    SET_PAGO_ARS
} from '../actions/types';

const initialState = {
    loading: false,
    error: '',
    compra: false,
    cotizacion: [],
    pagoTotalARS: '0,00',
    pagoTotalUSD: '0,00'
}
const FormularioUsuarioReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_GUARDAR_COMPRA:
            return {
                ...state,
                compra: true
            };
        case GET_COTIZACION:
            return {
                ...state,
                cotizacion: action.payload
            };
        case SET_PAGO_ARS:
            return {
                ...state,
                pagoTotalARS: action.payload
            };
        case SET_PAGO_USD:
            return {
                ...state,
                pagoTotalUSD: action.payload
            };

        default:
            return state;
    }
}

export default FormularioUsuarioReducer;