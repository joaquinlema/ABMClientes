import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, editUser } from '../../../../actions/FormularioActions';
import { Formik, Form } from 'formik';
import { Button, LinearProgress, Grid } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import MyTextField from '../../clientes/form/textField/MyTextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import * as Yup from "yup";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin:'10px'
    },
    botones: {
        marginLeft: '29%'
    },
    textField: {
        width: '100%',
        marginTop: '5px',

    },
    root: {
        left: '20%',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 5px 10px rgba(0, 37, 99, 0.05)',
        borderRadius: '12px',
       
    },
    botonGuardar: {
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
        fontFamily: 'Titillium Web'

    },
    titulo:{
        fontStyle: 'normal',
        fontWeight: 'bolder',
        fontSize: '22px',
        lineHeight: '24px',
        letterSpacing: '0.18px',
        color: '#002563',
        fontFamily:'Titillium Web',
        marginLeft:'20px'
    },
}));

const FormularioUsuario = () => {
    const classes = useStyles();

    const dispatch = useDispatch();


    const SignupSchema = Yup.object().shape({
        // name: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').matches(/^[a-zA-Z ]+$/,"Invalid Name only letters").required('Required'),
    });

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Formik
                initialValues={{
                    cliente: '',
                    cotizacion: '',
                    moneda: '',
                    valorCliente: '',
                    valorCotizacion: ''

                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        if (editStatus) {
                            dispatch(editUser(values, userEdit.id));
                        } else {
                            dispatch(createUser(values));
                        }
                        setSubmitting(false);
                        dispatch(abrirFormulario(false));
                        resetForm();
                    }, 500);
                }}
            >
                {({ submitForm, isSubmitting }) => (
                    <Form>
                        <span className={classes.titulo}>{"Operacion"}</span>
                        <Grid container className={classes.root}>
                            <Grid item xs={5} md={5} lg={5}  className={classes.grid}>
                                <MyTextField className={classes.textField} name="cliente" type="text" label="Cliente" placeholder="Nombre"></MyTextField>
                            </Grid>
                            <Grid item xs={5} md={5} lg={5} className={classes.grid}>
                                <MyTextField className={classes.textField} name="valorCliente" type="text" />
                            </Grid>
                            <Grid item xs={1} md={1} lg={1} className={classes.grid}>
                                <MyTextField className={classes.textField} name="moneda" />
                            </Grid>
                            <Grid item xs={5} md={5} lg={5} className={classes.grid}>
                                <MyTextField className={classes.textField} name="cotizacion" type="text" label="Cotizacion"></MyTextField>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6} className={classes.grid}>
                                <MyTextField className={classes.textField} name="valorCotizacion" type="text"></MyTextField>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6} className={classes.grid}>
                                {isSubmitting && <LinearProgress />}
                            </Grid>

                            {/* <Grid item xs={12} md={12} lg={12} className={classes.botones}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                >
                                    Guardar
                                </Button>
                            </Grid> */}
                        </Grid>
                    </Form>
                )}
            </Formik>
        </MuiPickersUtilsProvider>
    );
}

export default FormularioUsuario;