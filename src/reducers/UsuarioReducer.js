import {
    SET_ERROR, 
    SET_LOADING,
    SET_NEW_USER,
    GET_USERS,
    DELETE_USER,
    UPDATE_USER,
    STATUS_FORMULARIO,
    UPDATE_USER_LIST,
    CERRAR_MENSAJE,
    GET_USERS_ROL,
    SET_USER_ELIMINAR,
    GET_BRANCH_OFFICE
} from '../actions/types';
 
const initialState = {
    loading: true,
    error: '',
    usuarios:[],
    usuarioEdit:{},
    editStatus: false,
    abrirFormularioStatus: false,
    tituloFormulario: 'Nuevo Usuario',
    mostrarMensaje: false,
    textoMensaje: '',
    roles: [],
    tituloDialogo: '',
    labelBoton: '',
    usuarioEliminar:{},
    sucursales:[],
}
const UsuarioReducer =  (state = initialState, action) => {
    switch(action.type){
        case SET_USER_ELIMINAR:
            return {
                ...state,
                usuarioEliminar: action.payload,
                textoMensaje: '¿Estás seguro de que querés eliminarlo?',
                tituloDialogo: 'Eliminar ' + action.payload.nombre,
                labelBoton: 'Si, Eliminar',
            }
        case GET_USERS_ROL:
            return{
                ...state,
                roles: action.payload
            }
        case CERRAR_MENSAJE:
            return {
                ...state,
                mostrarMensaje: false,
                textoMensaje: ''
            };
        case UPDATE_USER_LIST:
            return{
                ...state,
                usuarios: state.usuarios.map(elem => elem.id === action.payload.id ? action.payload : elem),
                editStatus:false,
                tituloFormulario:'Nuevo Usuario',
                usuarioEdit:{},
                mostrarMensaje: true,
                textoMensaje: 'Usuario Modificado Exitosamente.'
            }
        case STATUS_FORMULARIO:
            return{
                ...state,
                abrirFormularioStatus: action.payload,
                tituloFormulario:'Nuevo Usuario',
                usuarioEdit:{},
                editStatus:false,
            }
        case UPDATE_USER:
            return{
                ...state,
                usuarioEdit:action.payload,
                editStatus:true,
                tituloFormulario:'Editar '+ action.payload.firstName +' '+ action.payload.lastName,
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
                usuarios: action.payload,
                loading:false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_NEW_USER:
            return {
                ...state,
                usuarios: [...state.usuarios,action.payload],
                mostrarMensaje: true,
                textoMensaje: 'Usuario Creado Exitosamente.'
            };
        case DELETE_USER:
            return{
                ...state,
                // eslint-disable-next-line eqeqeq
                usuarios: state.usuarios.filter(elem => { return (elem.id != action.payload)}),
                mostrarMensaje: true,
                textoMensaje: 'Usuario Eliminado Exitosamente.',
                usuarioEliminar: {},
                tituloDialogo: '',
                labelBoton: '',
        };
        case GET_BRANCH_OFFICE:
            return{
                ...state,
                sucursales:action.payload
        }
        default:
            return state;
    }
} 

export default UsuarioReducer;