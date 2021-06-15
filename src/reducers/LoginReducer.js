import {
    SET_ERROR,
    SET_LOADING,
    GET_USER_LOGIN,
    LOGOUT,
    SET_ERROR_LOGIN
} from '../actions/types';

const initialState = {
    loading: false,
    usuario: [],
    autorizado: false,
    errorLogin: false,
    mensajeErrorLogin: "",

}
const LoginReducer = (state = initialState, action) => {
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
        case GET_USER_LOGIN:
            return {
                ...state,
                usuario: action.payload,
                autorizado: true,
                loading: false,
                errorLogin: false,
            };
        case LOGOUT:
            return {
                ...state,
                autorizado: false,
            };
        case SET_ERROR_LOGIN:
            return {
                ...state,
                errorLogin: true,
                mensajeErrorLogin:action.payload,
                loading:false
            };


        default:
            return state;
    }
}

export default LoginReducer;