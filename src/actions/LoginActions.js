import axios from 'axios';
import { 
    SET_ERROR,
    SET_LOADING,
    GET_USER_LOGIN,
    LOGOUT
    
} from './types';

export const setLoading = () => {
    return{
        type: SET_LOADING
    }
}


export const getLoginUser = (values) => async dispatch => {
    try {
        const { data } = await  axios.post('https://localhost:44321/api/Login/login',
                { "userName": values.nombre,
                "password": values.password});

        sessionStorage.setItem("USER_FINANCIERA", data.data.userCode);
        
        dispatch({
            type: GET_USER_LOGIN,
            payload: data.data
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const logout=()=>dispatch=>{
    dispatch({
        type: LOGOUT,
    });

}