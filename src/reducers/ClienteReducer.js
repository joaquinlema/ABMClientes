import {
    SET_ERROR,
    SET_LOADING,
    SET_NEW_CLIENT,
    GET_CLIENTS,
    DELETE_CLIENT,
    UPDATE_CLIENT,
    STATUS_FORMULARIO_CLIENTE,
    UPDATE_CLIENT_LIST,
    CERRAR_MENSAJE
} from '../actions/typesCliente';
 
const initialState = {
    loading: false,
    error: '',
    clientes:[],
    clienteEdit:{},
    editStatus: false,
    abrirFormularioStatus: false,
    tituloFormulario: 'Nuevo Cliente',
    mostrarMensaje: false,
    textoMensaje: ''
}
const ClienteReducer =  (state = initialState, action) => {
    switch(action.type){
        case UPDATE_CLIENT_LIST:
            return{
                ...state,
                clientes: state.clientes.map(elem => elem.id === action.payload.id ? action.payload : elem),
                editStatus:false,
                tituloFormulario: 'Nuevo Cliente',
                clienteEdit:{},
                mostrarMensaje: true,
                textoMensaje: 'Cliente Modificado Exitosamente.'
            }
        case STATUS_FORMULARIO_CLIENTE:
            return{
                ...state,
                abrirFormularioStatus: action.payload,
                tituloFormulario: 'Nuevo Cliente',
                clienteEdit:{},
                editStatus:false,
            }
        case UPDATE_CLIENT:
            return{
                ...state,
                clienteEdit:action.payload,
                editStatus:true,
                tituloFormulario: 'Editar '+ action.payload.alias,
                abrirFormularioStatus:true
            }
        case SET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            } 
        case GET_CLIENTS:
            return {
                ...state,
                clientes: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
            case CERRAR_MENSAJE:
                return {
                    ...state,
                    mostrarMensaje: false,
                    textoMensaje: ''
                };
        case SET_NEW_CLIENT:
            return {
                ...state,
                clientes: [...state.clientes,action.payload],
                mostrarMensaje: true,
                textoMensaje: 'Cliente Creado Exitosamente.'
            }
        case DELETE_CLIENT:
            return{
                ...state,
                // eslint-disable-next-line eqeqeq
                clientes: state.clientes.filter(elem => { return (elem.id != action.payload)}),
                mostrarMensaje: true,
                textoMensaje: 'Cliente Eliminado Exitosamente.'
        }
        default:
            return state;
    }
} 

export default ClienteReducer;