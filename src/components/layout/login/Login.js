import React from 'react'
import { Grid, Button, TextField, InputLabel, OutlinedInput, LinearProgress } from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import MyTextField from '../clientes/form/textField/MyTextField'
import IconButton from '@material-ui/core/IconButton';
import Styles from './styles'
import { useHistory  } from 'react-router';

const Login = () => {
    let history = useHistory();
    const SignupSchema = Yup.object().shape({
        //nombre: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').matches(/^[a-zA-Z ]+$/, "Invalid Name only letters").required('Required'),
        //password: Yup.string().min(6, 'Password has to be longer than 6 characters!').required('Password is required!')
    });
    const classes = Styles();

    const validateUser = (values) => {
        alert(JSON.stringify(values));
        localStorage.setItem("USER_FINANCIERA",values.nombre);
        history.push("/");
    }
    return (
        <Formik
            initialValues={{
                nombre: '',
                password: '',
                showPassword: false,

            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    validateUser(values);
                    setSubmitting(false);
                    resetForm();
                }, 500);
            }}
        >
            {({ submitForm, isSubmitting, values, setFieldValue, errors }) => (
                <Form>
                    <Grid className={classes.body} container>
                        <Grid item sm={12} md={12} >
                            <h5 className={classes.bienvenido}>¡Bienvenido!</h5>
                        </Grid>
                        <Grid item sm={12} md={12} >
                            <h3 className={classes.financiera}>Sistema de <br></br>Financiera</h3>
                        </Grid>

                        <Grid item sm={12} md={12} className={classes.containerInputNombre}>
                            <InputLabel className={classes.labelInput} >Nombre</InputLabel>
                            <MyTextField id="outlined-basic"  name="nombre" className={classes.inputUsuario} />
                        </Grid>
                        <Grid item sm={12} md={12} className={classes.containerInput}>
                            <InputLabel htmlFor="standard-adornment-password" className={classes.labelInput}>
                                Password
                        </InputLabel>
                            <OutlinedInput
                                type={values.showPassword ? 'text' : 'password'}
                                name="password"
                                className={classes.inputPassword}
                                endAdornment={
                                    <InputAdornment>
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => { setFieldValue('showPassword', !values.showPassword) }}
                                            className={classes.trailingIcon}
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />

                        </Grid>
                        {/* {errors.password &&
                            <div className="input-feedback">
                                {errors.password}
                            </div>} */}
                        <Grid item xs={12} md={12} lg={12}>
                            {isSubmitting && <LinearProgress />}
                        </Grid>
                        <Grid item sm={12} md={12} className={classes.containerButton}>
                            <Button variant="contained" className={classes.button} disabled={isSubmitting} onClick={submitForm}>
                                <label className="-Label-Button">Aceptar</label>
                            </Button>
                        </Grid>
                        {/* <Grid item sm={12} md={12} className={classes.textButtonContainer}>
                            <a className={classes.textOlvide}>Olvide mi contraseña</a>
                        </Grid> */}
                    </Grid>
                </Form>
            )}
        </Formik>
    )
}

export default Login;