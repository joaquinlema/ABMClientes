import {
    SET_ERROR, 
    SET_LOADING,
    SET_GUARDAR_COMPRA
} from '../actions/types';
 
const initialState = {
    loading: false,
    error: '',
    compra:false
}
const FormularioUsuarioReducer =  (state = initialState, action) => {
    switch(action.type){
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

        default:
            return state;
    }
} 

export default FormularioUsuarioReducer;