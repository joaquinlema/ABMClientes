import {
    SET_ERROR,
    SET_LOADING,
    SET_NEW_CLIENT,
    GET_CLIENTS,
    DELETE_CLIENT,
    UPDATE_CLIENT,
    STATUS_FORMULARIO,
    UPDATE_CLIENT_LIST
} from '../actions/typesCliente';
 
const initialState = {
    loading: false,
    error: '',
    clientes:[],
    clienteEdit:{},
    editStatus: false,
    abrirFormularioStatus: false,
    tituloFormulario: 'Nuevo Cliente'
}
const ClienteReducer =  (state = initialState, action) => {
    switch(action.type){
        case UPDATE_CLIENT_LIST:
            return{
                ...state,
                clientes: state.clientes.map(elem => elem.id === action.payload.id ? action.payload : elem),
                editStatus:false,
                tituloFormulario: 'Nuevo Cliente',
                clienteEdit:{}
            }
        case STATUS_FORMULARIO:
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
                clienteEdit:action.payload.clienteEdit,
                editStatus:true,
                tituloFormulario: 'Editar '+ action.payload.nombreCliente,
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
        case SET_NEW_CLIENT:
            return {
                ...state,
                clientes: [...state.clientes,action.payload]
            }
        case DELETE_CLIENT:
            return{
                ...state,
                // eslint-disable-next-line eqeqeq
                clientes: state.clientes.filter(elem => { return (elem.id != action.payload)})
        }
        default:
            return state;
    }
} 

export default ClienteReducer;