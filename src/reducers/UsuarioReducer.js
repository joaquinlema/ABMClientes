import {
    SET_ERROR, 
    SET_LOADING,
    SET_NEW_USER,
    GET_USERS,
    DELETE_USER,
    UPDATE_USER,
    STATUS_FORMULARIO,
    UPDATE_USER_LIST
} from '../actions/types';
 
const initialState = {
    loading: false,
    error: '',
    usuarios:[],
    usuarioEdit:{},
    editStatus: false,
    abrirFormularioStatus: false,
    tituloFormulario: 'Formulario Nuevo'
}
const UsuarioReducer =  (state = initialState, action) => {
    switch(action.type){
        case UPDATE_USER_LIST:
            return{
                ...state,
                usuarios: state.usuarios.map(elem => elem.id === action.payload.id ? action.payload : elem),
                editStatus:false,
                tituloFormulario:'Formulario Nuevo',
                usuarioEdit:{}
            }
        case STATUS_FORMULARIO:
            return{
                ...state,
                abrirFormularioStatus: action.payload,
                tituloFormulario:'Formulario Nuevo',
                usuarioEdit:{},
                editStatus:false,
            }
        case UPDATE_USER:
            return{
                ...state,
                usuarioEdit:action.payload,
                editStatus:true,
                tituloFormulario:'Formulario Edicion',
                abrirFormularioStatus:true
            }
        case SET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            } 
        case GET_USERS:
            return {
                ...state,
                usuarios: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_NEW_USER:
            return {
                ...state,
                usuarios: [...state.usuarios,action.payload]
            }
        case DELETE_USER:
            return{
                ...state,
                // eslint-disable-next-line eqeqeq
                usuarios: state.usuarios.filter(elem => { return (elem.id != action.payload)})
        }
        default:
            return state;
    }
} 

export default UsuarioReducer;