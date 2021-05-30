import React, { Fragment, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {getClients} from '../../../../actions/ClienteActions'
import Nav from '../nav/Nav';
import Formulario from '../form/FormularioMoneda';
import Resumen from '../resumen/Resumen';
import Progress from '../../progress/Progress'
import Styles from './styles'




const NavMoneda = () => {
    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ClienteReducer);
    useEffect(() => {
        dispatch(getClients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [nav,setNav]= React.useState(false);
    const closeNav=()=>{
        setNav(true);
    }

    if(loading){
        return (
            <Progress></Progress>
        )
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
