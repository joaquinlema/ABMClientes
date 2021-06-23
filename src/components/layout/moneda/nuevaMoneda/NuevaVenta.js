import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, Redirect,useHistory,useLocation } from 'react-router-dom';
import BotonNuevo from '../../utils/botonNuevo/BotonNuevo';

const NuevaVenta = () => {

    const dispatch = useDispatch();
    let histories = useHistory();
    const nueva=()=>{
        histories.push("/NuevaVenta"); 
    }
    return (
       <BotonNuevo classButton={'buttonVenta'} accion={nueva} label={'Nueva Venta'} />
    );
}

export default NuevaVenta;
 