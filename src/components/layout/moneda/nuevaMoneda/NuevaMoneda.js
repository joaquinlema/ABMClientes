import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, Redirect,useHistory,useLocation } from 'react-router-dom';
import BotonNuevo from '../../utils/botonNuevo/BotonNuevo';

const NuevaMoneda = () => {

    const dispatch = useDispatch();
    let histories = useHistory();
    const nueva=()=>{
        histories.push("/NuevaMoneda"); 
    }
    return (
       <BotonNuevo accion={nueva} label={'Nueva Moneda'} />
    );
}

export default NuevaMoneda;
