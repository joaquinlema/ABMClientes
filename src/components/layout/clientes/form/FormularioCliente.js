import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {createUser,editUser} from '../../../../actions/FormularioClienteActions';
import {abrirFormularioCliente} from '../../../../actions/ClienteActions';
import { Formik, Form} from 'formik';
import { Button, LinearProgress, Grid, Divider } from '@material-ui/core';
import MyTextField from './textField/MyTextField';
import * as Yup from "yup";
import { makeStyles } from '@material-ui/core/styles';
import './estiloForm.css';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Titillium Web:300,400,700', 'sans-serif']
    }
  });

const useStyles = makeStyles((theme) => ({
    grid: {
      marginTop: '27px',
      paddingLeft: '20px'
    },
    headerInput:{
        paddingLeft: '20px'
    },
    formulario:{
        width: '734px',
        marginLeft: '353px',
        fontFamily: 'Titillium Web'
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
        marginLeft: '423px',
        marginTop: '40px',
    },
    label:{
        marginLeft: '20px',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '0.4px',
        color: 'rgba(0, 37, 99, 0.6)'
    },
    labelCV:{
        marginLeft: '20px',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '18px',
        letterSpacing: '0.5px',
        color: '#414141',
    },
    titulo:{
        marginLeft: '20px',
        fontStyle: 'normal',
        fontWeight: 'bolder',
        fontSize: '22px',
        lineHeight: '24px',
        letterSpacing: '0.18px',
        color: '#002563'
    },
    divider:{
        width: '97%',
        marginTop: '31px',
        marginBottom: '32px',
        marginLeft: '24px'
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
        textTransform: 'none'
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
        textTransform: 'none'
    }
  }));

const FormularioCliente = () => {
    const classes = useStyles();

   const dispatch = useDispatch();
   const {clienteEdit, editStatus}  = useSelector(state => state.ClienteReducer);
    
    const SignupSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').matches(/^[a-zA-Z ]+$/,"Invalid Name only letters").required('Required'),
        apellido: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').matches(/^[a-zA-Z ]+$/,"Invalid SurName only letters").required('Required'),
        email: Yup.string().email('Invalid Mail Format').required('Required'),
    });

    return (
            <Formik
                initialValues={{
                    alias: (clienteEdit.alias !== '') ? clienteEdit.alias : '', 
                    telefono: (clienteEdit.telefono !== '') ? clienteEdit.telefono : '',
                    nombre: (clienteEdit.nombre !== '') ? clienteEdit.nombre : '', 
                    mail: (clienteEdit.mail !== '') ? clienteEdit.mail : '', 
                    direccion: (clienteEdit.direccion !== '') ? clienteEdit.direccion : '',
                    dni: (clienteEdit.dni !== '') ? clienteEdit.dni : '', 
                    cuil: (clienteEdit.cuil !== '') ? clienteEdit.cuil : '', 
                    clearingCompra: (clienteEdit.clearingCompra !== '') ? clienteEdit.clearingCompra : '', 
                    tasaMensualCompra: (clienteEdit.tasaMensualCompra !== '') ? clienteEdit.tasaMensualCompra : '',
                    comisionCompra: (clienteEdit.comisionCompra !== '') ? clienteEdit.comisionCompra : '',
                    clearingVenta: (clienteEdit.clearingVenta !== '') ? clienteEdit.clearingVenta : '', 
                    tasaMensualVenta: (clienteEdit.tasaMensualVenta !== '') ? clienteEdit.tasaMensualVenta : '', 
                    comisionVenta: (clienteEdit.comisionVenta !== '') ? clienteEdit.comisionVenta : '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting,resetForm }) => {
                    setTimeout(() => {
                        if(editStatus){
                           dispatch(editUser(values, clienteEdit.id));
                        }else{
                            dispatch(createUser(values));
                        }
                        setSubmitting(false);
                        dispatch(abrirFormularioCliente(false));
                        resetForm();
                    }, 500);
                }}
            >
                {({ submitForm, isSubmitting}) => (
                    <Form className={classes.formulario}>
                        <span className={classes.titulo}>Nuevo Cliente</span>
                        <Grid container>
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
                                <MyTextField className={classes.textField}  name="telefono" type="text" />
                            </Grid>

                            <Grid item xs={6} md={6} lg={6} className={classes.grid}>
                                <label className={classes.label}>Mail</label>
                                <MyTextField className={classes.textField}  name="mail" type="Email"  />
                            </Grid>

                            <Grid item xs={6} md={6} lg={6} className={classes.grid}>
                                <label className={classes.label}>DNI</label>
                                <MyTextField className={classes.textField}  name="dni" type="text"  />
                            </Grid>

                            <Grid item xs={6} md={6} lg={6} className={classes.grid}>
                                <label className={classes.label}>CUIL</label>
                                <MyTextField className={classes.textField}  name="cuil" type="text"  />
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

                            <Grid item xs={3} md={3} lg={3} className={classes.grid +' '+ classes.tipo}>
                                <label className={classes.labelCV}>Compra</label>
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} className={classes.grid}>
                                <MyTextField   name="clearingCompra" type="text"  />
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} className={classes.grid}>
                                <MyTextField   name="comisionCompra" type="text"  />
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} className={classes.grid}>
                                <MyTextField   name="tasaMensualCompra" type="text"  />
                            </Grid>

                            <Grid item xs={3} md={3} lg={3} className={classes.grid +' '+ classes.tipo}>
                                <label className={classes.labelCV}>Venta</label>
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} className={classes.grid}>
                                <MyTextField   name="clearingVenta" type="text"  />
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} className={classes.grid}>
                                <MyTextField   name="comisionVenta" type="text"  />
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} className={classes.grid}>
                                <MyTextField   name="tasaMensualVenta" type="text"  />
                            </Grid>

                            <Grid item xs={12} md={12} lg={12}>
                                {isSubmitting && <LinearProgress />}
                            </Grid>

                            <Grid item xs={12} md={12} lg={12} className={classes.botones}>
                                <Button size="small" className={classes.botonCancelar} disabled={isSubmitting} 
                                onClick={() => { dispatch(abrirFormularioCliente(false));}}
                                >
                                    Cancelar
                                </Button>
                                
                                <Button
                                    variant="contained"
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                    className={classes.botonGuardar}
                                >
                                    {editStatus ? 'Actualizar' : 'Crear'}
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
    );
}

export default FormularioCliente;