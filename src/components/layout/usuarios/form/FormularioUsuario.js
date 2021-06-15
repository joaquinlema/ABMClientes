import  React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {createUser,editUser} from '../../../../actions/FormularioUsuarioActions';
import {abrirFormularioUsuario} from '../../../../actions/UsuarioActions';
import { Formik, Form, Field} from 'formik';
import { Button, LinearProgress, Grid, Divider, FormControl, MenuItem } from '@material-ui/core';
import MyTextField from './textField/MyTextField';
import * as Yup from "yup";
import { makeStyles } from '@material-ui/core/styles';
import './estiloForm.css';
import BotonNuevo from '../../utils/botonNuevo/BotonNuevo';
import { Select } from 'formik-material-ui';

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

const FormularioUsuario = () => {
    const classes = useStyles();

   const dispatch = useDispatch();
   const {usuarioEdit, editStatus, tituloFormulario, roles,sucursales}  = useSelector(state => state.UsuarioReducer);
    
    const SignupSchema = Yup.object().shape({
        nombre: Yup.string().min(1, 'Too Short!').max(170, 'Too Long!').required('Required'),
        apellido: Yup.string().min(1, 'Too Short!').max(170, 'Too Long!').required('Required'),
        usuario: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
        rol: Yup.string().ensure().required('Required'),
        contraseña: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
        //sucursal: Yup.string().min(1, 'Too Short!').max(70, 'Too Long!').required('Required'),
    });

    return (
            <Formik
                initialValues={{
                    nombre: (typeof usuarioEdit.firstName !== 'undefined') ? usuarioEdit.firstName : '', 
                    apellido: (typeof usuarioEdit.lastName !== 'undefined') ? usuarioEdit.lastName : '', 
                    usuario: (typeof usuarioEdit.userCode !== 'undefined') ? usuarioEdit.userCode : '', 
                    rol: (typeof usuarioEdit.role !== 'undefined') ? usuarioEdit.role : '', 
                    contraseña: (typeof usuarioEdit.passwordHash !== 'undefined') ? usuarioEdit.passwordHash : '', 
                    sucursal: (typeof usuarioEdit.branchOfficeIdDTO !== 'undefined') ? usuarioEdit.branchOfficeId : '', 
                    
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting,resetForm }) => {
                    setTimeout(() => {
                        if(editStatus){
                           dispatch(editUser(values, usuarioEdit.userId));
                        }else{
                            //console.log(values);
                            dispatch(createUser(values));
                        }
                        setSubmitting(false);
                        dispatch(abrirFormularioUsuario(false));
                        resetForm();
                    }, 500);
                }}
            >
                {({ submitForm, isSubmitting, errors, touched, initialValues}) => (
                    <Form >
                        <span className={classes.titulo}>{tituloFormulario}</span>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={6} lg={6} className={classes.grid}>
                                <label className={classes.label}>Nombre *</label>
                                <MyTextField className={classes.textField} name="nombre" type="text" />
                            </Grid>

                            <Grid item xs={6} md={6} lg={6} className={classes.grid} >
                                <label className={classes.label}>Apellido *</label> 
                                <MyTextField className={classes.textField} name="apellido" type="text" />
                            </Grid>

                            <Divider variant="middle" className={classes.divider}/>

                            <Grid item xs={6} md={6} lg={6}>
                                <label className={classes.label}>Usuario *</label>
                                <MyTextField className={classes.textField} name="usuario" type="text" />
                            </Grid>

                            <Grid item xs={6} md={6} lg={6} >
                                <label className={classes.label}>Rol *</label> 
                                <FormControl className={classes.textField}>
                                    <Field
                                        error={errors.rol && touched.rol ? true : false}
                                        component={Select}
                                        name="rol"
                                        defaultValue={initialValues.rol}
                                        variant="outlined"
                                        inputProps={{
                                            id: 'rol',
                                        }}
                                    >
                                        {roles.length > 0 &&
                                            roles.map((item, index) => (
                                                <MenuItem key={index} value={item.id}>{item.rol}</MenuItem>
                                            ))
                                        }
                                    </Field>
                                </FormControl>
                                {errors.rol && touched.rol ? (
                                    <p className='MuiFormHelperText-root MuiFormHelperText-contained Mui-error'>{errors.rol}</p>) : null}
                            </Grid>

                            <Grid item xs={6} md={6} lg={6} className={classes.grid}>
                                <label className={classes.label}>Contraseña *</label>
                                <MyTextField className={classes.textField} name="contraseña" type="password" />
                            </Grid>

                            <Grid item xs={6} md={6} lg={6} className={classes.grid} >
                                <label className={classes.label}>Sucursal *</label> 
                                <FormControl className={classes.textField}>
                                    <Field
                                        error={errors.rol && touched.rol ? true : false}
                                        component={Select}
                                        name="sucursal"
                                        defaultValue={initialValues.sucursal}
                                        variant="outlined"
                                        inputProps={{
                                            id: 'sucursal',
                                        }}
                                    >
                                        {sucursales.length > 0 &&
                                            sucursales.map((item, index) => (
                                                <MenuItem key={index} value={item.branchOfficeId}>{item.number}</MenuItem>
                                            ))
                                        }
                                    </Field>
                                 </FormControl>   
                            </Grid>

                            <Grid item xs={12} md={12} lg={12}>
                                {isSubmitting && <LinearProgress />}
                            </Grid>

                            <Grid item xs={12} md={12} lg={12} container justify="flex-end" spacing={1}>
                                <Button size="small" className={classes.botonCancelar} disabled={isSubmitting} 
                                onClick={() => { dispatch(abrirFormularioUsuario(false));}}
                                >
                                    Cancelar
                                </Button>
                                
                                <BotonNuevo accion={submitForm} label={editStatus ? 'Modificar' : 'Crear'}/>
                          
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
    );
}

export default FormularioUsuario;