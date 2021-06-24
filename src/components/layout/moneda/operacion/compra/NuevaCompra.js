import React, {useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {getClients} from '../../../../../actions/ClienteActions';
import { BrowserRouter as Router, Switch, Route, Link, Redirect,useHistory,useLocation } from 'react-router-dom';
import Nav from '../../nav/Nav';
import Formulario from '../../form/FormularioCompra';
import Resumen from '../../resumen/Resumen';
import Progress from '../../../progress/Progress';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    grid: {
      marginTop: '60px',
    },
    gridResumen:{
        marginTop: '30px',
    },
    gridForm:{
        marginTop: '60px',
        marginLeft:'30px'
    }
}))

const NuevaCompra = () => {
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
            histories.push("/HistorialPage"); 
        }
        
     
    if(loading){
        return (
            <Progress></Progress>
        )
    }
  
   
    
    return (
        <Grid container direction="row">
            <Grid item xs={12} sm={12} md={12} lg={12} >
              <Nav CloseNav={closeNav} accionCompra={setCompraValue} title={"Nueva Compra"} textBorrador={"Guardar como borrador"} labelButton={'Comprar'}></Nav>
            </Grid>
            <Grid container item xs={2} sm={2} md={2} lg={2} className={classes.grid}/>
            <Grid  item xs={6} sm={6} md={6} lg={6} className={classes.grid}>
                <Formulario compra={setCompraValue}></Formulario>
            </Grid>
            <Grid  item xs={1} sm={1} md={1} lg={1} className={classes.grid}/>
            <Grid item xs={3} sm={3} md={3} lg={3} className={classes.grid}>
                <Resumen></Resumen>
            </Grid>
        </Grid>
    );
}

export default NuevaCompra;
