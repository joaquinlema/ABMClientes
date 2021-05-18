import * as React from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import {createUser,editUser} from '../../../../actions/FormularioActions';
//import {abrirFormulario} from '../../../../actions/UsuarioActions';
import { Formik, Form} from 'formik';
import { Button, LinearProgress, Grid, Divider } from '@material-ui/core';
import MyTextField from './textField/MyTextField';
import * as Yup from "yup";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    grid: {
      marginTop: '27px',
      paddingLeft: '20px'
    },
    formulario:{
        width: '734px',
        marginLeft: '353px'
    },
    textField:{
        width: '100%',
        marginTop: '5px'
    },
    botones: {
        marginLeft: '29%'
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
    }
  }));

const FormularioCliente = () => {
    const classes = useStyles();

   // const dispatch = useDispatch();
   // const {userEdit, editStatus}  = useSelector(state => state.ClienteReducer);
    
    const SignupSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').matches(/^[a-zA-Z ]+$/,"Invalid Name only letters").required('Required'),
        apellido: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').matches(/^[a-zA-Z ]+$/,"Invalid SurName only letters").required('Required'),
        email: Yup.string().email('Invalid Mail Format').required('Required'),
    });

    return (
            <Formik
                initialValues={{
                    alias: 'alias', 
                    telefono: '12344412',
                    nombre: 'nombre completo', 
                    mail:'ja@hotmail.com', 
                    direccion:'av peter 123',
                    dni:'12344421', 
                    cuil: '20-123123123-9', 
                    clearingCompra:'clearingCompra', 
                    tasaMensualCompra: 'tasa 123',
                    comisionCompra:'comision 123',
                    clearingVenta: '123a aventa', 
                    tasaMensualVenta:'tasa venta', 
                    comisionVenta:'comision venta',
                    //estos de abajo no van
                    // name: (userEdit.name !== '') ? userEdit.name : '',
                    // apellido: (userEdit.apellido !== '') ? userEdit.apellido : '',
                    // email: (userEdit.email !== '') ? userEdit.email : '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting,resetForm }) => {
                    setTimeout(() => {
                        // if(editStatus){
                        //    // dispatch(editUser(values,userEdit.id));
                        // }else{
                        //     //dispatch(createUser(values));
                        // }
                        setSubmitting(false);
                        //dispatch(abrirFormulario(false));
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

                            <Grid item xs={12} md={12} lg={12}>
                                {isSubmitting && <LinearProgress />}
                            </Grid>

                            <Grid item xs={12} md={12} lg={12} className={classes.botones}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                >
                                     guardar{/* {editStatus ? 'Actualizar' : 'Guardar'} */}
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    disabled={isSubmitting}
                                   // onClick={() => { dispatch(abrirFormulario(false));}}
                                >
                                    Cancelar
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
    );
}

export default FormularioCliente;