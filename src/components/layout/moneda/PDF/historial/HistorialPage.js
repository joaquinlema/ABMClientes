import React, {useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {getClients} from '../../../../../actions/ClienteActions';
import { BrowserRouter as Router, Switch, Route, Link, Redirect,useHistory,useLocation } from 'react-router-dom';
import Nav from '../../nav/Nav';
import FormularioVenta from '../../form/venta/FormularioVenta';
import Resumen from '../../resumen/Resumen';
import Progress from '../../../progress/Progress';
import { makeStyles } from '@material-ui/core/styles';
import Historial from './Historial';
const useStyles = makeStyles((theme) => ({
    grid: {
      marginTop: '60px',
    },
    gridResumen:{
        marginTop: '30px',
    }
}))


const HistorialPage = () => {
    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ClienteReducer);
    useEffect(() => {
        dispatch(getClients());
        //dispatch(getCotizacion());
       
    }, []);

     const classes = useStyles();
    let histories = useHistory();
    
    const closeNav=()=>{
        histories.push("/NuevaMoneda"); 
    }

    
        
     
    if(loading){
        return (
            <Progress></Progress>
        )
    }
  
   
    
    return (
        <Grid container direction="row">
            <Grid item xs={12} sm={12} md={12} lg={12} >
            <Nav CloseNav={closeNav} accionCompra={closeNav} title={"Historial"} textBorrador={"Guardar como borrador"} labelButton={'Vender'}></Nav> 
            </Grid>
            <Grid container item xs={2} sm={2} md={2} lg={2} className={classes.grid}/>
            <Grid  item xs={7} sm={7} md={7} lg={7} className={classes.grid}>
             <Historial/>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} className={classes.grid}></Grid>
        </Grid>
    );
}

export default HistorialPage;
