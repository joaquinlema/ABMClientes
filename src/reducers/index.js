import {combineReducers} from 'redux';
import FormularioUsuarioReducer from './FormularioUsuarioReducer';
import UsuarioReducer from './UsuarioReducer';
import ClienteReducer from './ClienteReducer';
import ClienteFormularioReducer from './ClienteFormularioReducer';
import FormularioMonedaReducer from './FormularioMonedaReducer';
import LoginReducer from './LoginReducer'

const rootReducer =  combineReducers({
     FormularioUsuarioReducer,
     UsuarioReducer,
     ClienteFormularioReducer,
     ClienteReducer,
     FormularioMonedaReducer,
     LoginReducer
});

export default rootReducer;