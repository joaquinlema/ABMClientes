import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../nav/Nav';
import Formulario from '../form/FormularioMoneda';
import Resumen from '../resumen/Resumen'
import Styles from './styles'




const NavMoneda = () => {
    const [nav,setNav]= React.useState(false);
    const closeNav=()=>{
        setNav(true);
    }
    const classes = Styles();
    return (
        <Grid container direction="row">
            <Grid item xs={12} sm={12} md={12} lg={12} >
               {(!nav) ? <Nav CloseNav={closeNav}></Nav> : <Grid></Grid>}
            </Grid>
            <Grid container item xs={9} sm={9} md={9} lg={9} className={classes.grid}>
                <Formulario></Formulario>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} className={classes.gridResumen}>
                <Resumen></Resumen>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} >

            </Grid>
        </Grid>
    );
}

export default NavMoneda;
