import Axios from 'axios';
import {
    SET_ERROR,
    SET_LOADING,
    SET_NEW_USER,
    UPDATE_USER_LIST,
} from './types';
import UserDTO from '../DTO/UserDTO'

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export const createUser = (user) => async dispatch => {
    try {
        const { data } = await Axios.post('https://localhost:44321/api/User/',
        {
            "lastName": user.apellido,
            "firstName": user.nombre,
            "userCode": user.usuario,
            "passwordHash": user.contraseña,
            "role": user.rol,
            "branchOfficeId": user.sucursal,
            "branchOffice": {
              "branchOfficeId": user.sucursal,
              "number": user.sucursalNumber
            }
        }   
        );
          
        if(data.isValid){
            dispatch({
                type: SET_NEW_USER,
                payload: UserDTO.getUser(data.result)
            })    
        }else{
            dispatch({
                type: SET_ERROR,
                payload: 'Usuario no pudo ser guardado'
            });    
        }

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const editUser = (user, id) => async dispatch => {
    try {

        const { data } = await Axios.put('https://localhost:44321/api/User/' + id, {
            "lastName": user.apellido,
            "firstName": user.nombre,
            "userCode": user.usuario,
            "passwordHash": user.contraseña,
            'role': user.rol,
            'userId': id,
            "branchOfficeId": user.sucursal,
            "branchNumber": user.sucursalNumber,
            "branchOffice": {
                "branchOfficeId": user.sucursal,
                "number": user.sucursalNumber
              }
        });
      
        dispatch({
            type: UPDATE_USER_LIST,
            payload:  UserDTO.editUser(data.result)
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

