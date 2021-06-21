import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {createClient,editClient} from '../../../../actions/FormularioClienteActions';
import {abrirFormularioCliente} from '../../../../actions/ClienteActions';
import { Formik, Form} from 'formik';
import { Button, LinearProgress, Grid, Divider } from '@material-ui/core';
import MyTextField from './textField/MyTextField';
import * as Yup from "yup";
import { makeStyles } from '@material-ui/core/styles';
import './estiloForm.css';
import BotonNuevo from '../../utils/botonNuevo/BotonNuevo';

const useStyles = makeStyles((theme) => ({
    grid: {
      marginTop: '18px',
    },
    headerInput:{
        paddingLeft: '20px'
    },
    textField:{
        width: '100%',
        marginTop: '5px',
    },
    inputText:{ 
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '18px',
        letterSpacing: ' 0.5px',
        color: '#002563'
    },
    botones: {
        marginLeft: '366px',
        marginTop: '35px',
    },
    label:{
        marginLeft: '20px',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '0.4px',
        color: 'rgba(0, 37, 99, 0.6)',
        fontFamily:'Titillium Web'

    },
    labelCV:{
        marginLeft: '20px',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '18px',
        letterSpacing: '0.5px',
        color: '#414141',
        fontFamily:'Titillium Web'

    },
    titulo:{
        fontStyle: 'normal',
        fontWeight: 'bolder',
        fontSize: '22px',
        lineHeight: '24px',
        letterSpacing: '0.18px',
        color: '#002563',
        fontFamily:'Titillium Web'
    },
    divider:{
        width: '97%',
        marginTop: '23px',
        marginBottom: '32px',
        marginLeft: '12px'
    },
    tipo: {
        alignSelf: 'center'
    },
    botonCancelar:{
        color:'#5974FB',
        width:'52px',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        textTransform: 'none',
        fontFamily:'Titillium Web',
        marginRigth: '31px'

    },
    botonGuardar:{
        background: '#5974FB',
        borderRadius: '4px',
        width: '215px',
        height: '40px',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        color: '#FFFFFF',
        marginLeft: '31px',
        textTransform: 'none',
        fontFamily:'Titillium Web'

    },
    gridCompraVenta: {
        marginTop: '1px'
    }
  }));

const FormularioCliente = () => {
    const classes = useStyles();

   const dispatch = useDispatch();
   const {clienteEdit, editStatus, tituloFormulario}  = useSelector(state => state.ClienteReducer);
    
    const SignupSchema = Yup.object().shape({
        alias: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
        telefono: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').matches(/^[0-9]+$/,"Solo Numeros").required('Required'),
    });

    return (
            <Formik
                initialValues={{
                    alias: (typeof clienteEdit.alias !== 'undefined') ? clienteEdit.alias : '', 
                    telefono: (typeof clienteEdit.telefono !== 'undefined') ? clienteEdit.telefono : 0,
                    nombre: (typeof clienteEdit.nombre !== 'undefined') ? clienteEdit.nombre : '', 
                    mail: (typeof clienteEdit.mail !== 'undefined') ? clienteEdit.mail : '', 
                    direccion: (typeof clienteEdit.direccion !== 'undefined') ? clienteEdit.direccion : '',
                    dni: (typeof clienteEdit.dni !== 'undefined') ? clienteEdit.dni : 0, 
                    cuil: (typeof clienteEdit.cuil !== 'undefined') ? clienteEdit.cuil : '', 
                    clearingCompra: (typeof clienteEdit.clearingCompra !== 'undefined') ? clienteEdit.clearingCompra : 0, 
                    tasaMensualCompra: (typeof clienteEdit.tasaMensualCompra !== 'undefined') ? clienteEdit.tasaMensualCompra : 0,
                    comisionCompra: (typeof clienteEdit.comisionCompra !== 'undefined') ? clienteEdit.comisionCompra : 0,
                    clearingVenta: (typeof clienteEdit.clearingVenta !== 'undefined') ? clienteEdit.clearingVenta : 0, 
                    tasaMensualVenta: (typeof clienteEdit.tasaMensualVenta !== 'undefined') ? clienteEdit.tasaMensualVenta : 0, 
                    comisionVenta: (typeof clienteEdit.comisionVenta !== 'undefined') ? clienteEdit.comisionVenta : 0,
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting,resetForm }) => {
                    setTimeout(() => {
                        if(editStatus){
                           dispatch(editClient(values, clienteEdit.clientId));
                        }else{
                            dispatch(createClient(values));
                        }
                        setSubmitting(false);
                        dispatch(abrirFormularioCliente(false));
                        resetForm();
                    }, 500);
                }}
            >
                {({ submitForm, isSubmitting}) => (
                    <Form >
                        <span className={classes.titulo}>{tituloFormulario}</span>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={6} lg={6} className={classes.grid}>
                                <label className={classes.label}>Alias*</label>
                                <MyTextField className={classes.textField} name="alias" type="text" />
                            </Grid>

                            <Grid item xs={6} md={6} lg={6} className={classes.grid} >
                                <label className={classes.label}>Nombre</label> 
                                <MyTextField className={classes.textField} name="nombre" type="text" />
                            </Grid>

                            <Grid item xs={6} md={6} lg={6} className={classes.grid}>
                                <label className={classes.label}>Telefono*</label>
                                <MyTextField className={classes.textField}  name="telefono" type="number" />
                            </Grid>

                            <Grid item xs={6} md={6} lg={6} className={classes.grid}>
                                <label className={classes.label}>Mail</label>
                                <MyTextField className={classes.textField}  name="mail" type="Email"  />
                            </Grid>

                            <Grid item xs={6} md={6} lg={6} className={classes.grid}>
                                <label className={classes.label}>DNI</label>
                                <MyTextField className={classes.textField}  name="dni" type="number"  />
                            </Grid>

                            <Grid item xs={6} md={6} lg={6} className={classes.grid}>
                                <label className={classes.label}>CUIL</label>
                                <MyTextField className={classes.textField}  name="cuil" type="number"  />
                            </Grid>

                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                <label className={classes.label}>Direccion</label>
                                <MyTextField className={classes.textField}  name="direccion" type="text" />
                            </Grid>
  
                            <Divider variant="middle" className={classes.divider}/>

                            <Grid item xs={3} md={3} lg={3} className={classes.headerInput}>
                                {' '}
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} className={classes.headerInput}>
                                <label className={classes.label}>Clearing</label>    
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} className={classes.headerInput}>
                                <label className={classes.label}>Comision</label>    
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} className={classes.headerInput}>
                                <label className={classes.label}>Tasa Mensual</label>
                            </Grid>

                            <Grid item xs={3} md={3} lg={3} className={classes.grid +' '+ classes.tipo + ' ' + classes.gridCompraVenta}>
                                <label className={classes.labelCV}>Compra</label>
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} className={classes.grid + ' ' + classes.gridCompraVenta}>
                                <MyTextField  name="clearingCompra" type="number"  />
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} className={classes.grid + ' ' + classes.gridCompraVenta}>
                                <MyTextField   name="comisionCompra" type="number"  />
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} className={classes.grid + ' ' + classes.gridCompraVenta}>
                                <MyTextField   name="tasaMensualCompra" type="number"  />
                            </Grid>

                            <Grid item xs={3} md={3} lg={3} className={classes.grid +' '+ classes.tipo + ' ' + classes.gridCompraVenta}>
                                <label className={classes.labelCV}>Venta</label>
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} className={classes.grid + ' ' + classes.gridCompraVenta}>
                                <MyTextField   name="clearingVenta" type="number"  />
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} className={classes.grid + ' ' + classes.gridCompraVenta}>
                                <MyTextField   name="comisionVenta" type="number"  />
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} className={classes.grid + ' ' + classes.gridCompraVenta}>
                                <MyTextField   name="tasaMensualVenta" type="number"  />
                            </Grid>

                            <Grid item xs={12} md={12} lg={12}>
                                {isSubmitting && <LinearProgress />}
                            </Grid>

                            <Grid item xs={12} md={12} lg={12} container justify="flex-end" spacing={1}>
                                <Button size="small" className={classes.botonCancelar} disabled={isSubmitting} 
                                    onClick={() => { dispatch(abrirFormularioCliente(false));}}
                                >
                                    Cancelar
                                </Button>
                                
                                <BotonNuevo accion={submitForm} classButton={"buttonStyle"} label={editStatus ? 'Modificar' : 'Crear'}/>
                          
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
    );
}

export default FormularioCliente;