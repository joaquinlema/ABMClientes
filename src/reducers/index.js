import {combineReducers} from 'redux';
import FormularioUsuarioReducer from './FormularioUsuarioReducer';
import UsuarioReducer from './UsuarioReducer';
import TaskReducer from './TaskReducer';
import ClienteReducer from './ClienteReducer';
import ClienteFormularioReducer from './ClienteFormularioReducer';
import FormularioMonedaReducer from './FormularioMonedaReducer'

const rootReducer =  combineReducers({
     FormularioUsuarioReducer,
     UsuarioReducer,
     TaskReducer,
     ClienteFormularioReducer,
     ClienteReducer,
     FormularioMonedaReducer
});

export default rootReducer;