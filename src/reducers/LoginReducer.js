import {
    SET_ERROR,
    SET_LOADING,
    GET_USER_LOGIN,
    LOGOUT
} from '../actions/types';

const initialState = {
    loading: false,
    usuario:[],
    autorizado:false,

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
                autorizado:true,
            };
            case LOGOUT:
                return {
                    ...state,
                    autorizado:false,
                };


        default:
            return state;
    }
}

export default LoginReducer;