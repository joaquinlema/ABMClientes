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
const useStyles = makeStyles((theme) => ({
    grid: {
      marginTop: '60px',
    },
    gridResumen:{
        marginTop: '30px',
    }
}))


const NuevaVenta = () => {
    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ClienteReducer);
    useEffect(() => {
        dispatch(getClients());
        //dispatch(getCotizacion());
       
    }, []);

    const [nav,setNav]= React.useState(false);
     const classes = useStyles();
    let histories = useHistory();
    
    const closeNav=()=>{
        histories.push("/NuevaMoneda"); 
    }

     const setCompraValue=()=>{
            histories.push("/HistorialCompra"); 
        }
        
     
    if(loading){
        return (
            <Progress></Progress>
        )
    }
  
   
    
    return (   
    <>
    <Nav CloseNav={closeNav} accionCompra={setCompraValue} title={"Nueva Venta"} textBorrador={"Guardar como borrador"} labelButton={'Vender'}></Nav> 
        <Grid container direction="row">
            <Grid item xs={12} sm={12} md={12} lg={12} >
         
            </Grid>
            <Grid container item xs={9} sm={9} md={9} lg={9} className={classes.grid}>
                <FormularioVenta compra={setCompraValue}/>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} className={classes.gridResumen}>
                <Resumen></Resumen>
            </Grid>
        </Grid>
       </> 
    );
}

export default NuevaVenta;
