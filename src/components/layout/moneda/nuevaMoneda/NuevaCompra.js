import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, Redirect,useHistory,useLocation } from 'react-router-dom';
import BotonNuevo from '../../utils/botonNuevo/BotonNuevo';

const NuevaCompra = () => {

    const dispatch = useDispatch();
    let histories = useHistory();
    const nueva=()=>{
        histories.push("/NuevaCompra"); 
    }
    return (
       <BotonNuevo classButton={"buttonStyle"} accion={nueva} label={'Nueva Compra'} />
    );
}

export default NuevaCompra;
 