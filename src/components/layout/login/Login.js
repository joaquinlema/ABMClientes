import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getLoginUser } from '../../../actions/LoginActions'
import { Grid, Button, InputLabel, LinearProgress, Hidden, Typography } from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import MyTextField from '../clientes/form/textField/MyTextField';
import IconButton from '@material-ui/core/IconButton';
import Styles from './styles'


const Login = () => {
    const classes = Styles();
    const dispatch = useDispatch();
    let history = useHistory();
    const {autorizado}  = useSelector(state => state.LoginReducer);
    
    const SignupSchema = Yup.object().shape({
        nombre: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').matches(/^[a-zA-Z ]+$/, "Invalid Name only letters").required('Required'),
        password: Yup.string().min(6, 'Password has to be longer than 6 characters!').required('Password is required!')
    });

    if(autorizado){ 
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
                    dispatch(getLoginUser(values));
                    //validateUser(values);
                    setSubmitting(false);
                    resetForm();
                }, 500);
            }}
        >
            {({ submitForm, isSubmitting, values, setFieldValue, errors }) => (
                <Form>
                    <Grid className={classes.body} container alignItems="center">
                        <Hidden only={['sm', 'xs']}>
                            <Grid item xs={12} md={4} only="lg"></Grid>
                        </Hidden>
                        <Grid container item xs={12} md={4}>
                            <Grid item xs={12} md={12} className={classes.gridBienvenido}>
                                <Typography variant="h5" className={classes.bienvenido}>¡Bienvenido!</Typography>
                            </Grid>
                            <Grid item xs={12} md={12} className={classes.grid}>
                                <Typography className={classes.financiera}>Sistema <br></br>de Financiera</Typography>
                            </Grid>
                            <Grid item xs={12} md={12} className={classes.grid}>
                                <InputLabel className={classes.label}>Nombre</InputLabel>
                                <MyTextField type="text" name="nombre" className={classes.inputUsuario} />
                            </Grid>
                            <Grid item xs={12} md={12} className={classes.gridPass}>
                                <InputLabel className={classes.label}>Password</InputLabel>
                                <MyTextField className={classes.inputUsuario} name="password" type={values.showPassword ? 'text' : 'password'} InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <IconButton onClick={() => { setFieldValue('showPassword', !values.showPassword) }} >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }} />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                {isSubmitting && <LinearProgress />}
                            </Grid>
                            <Grid item container sm={12} md={12} className={classes.gridButtom} alignItems="center">
                                <Grid item xs={3} md={3}></Grid>
                                <Grid item xs={6} md={6}>
                                    <Button className={classes.button} disabled={isSubmitting} onClick={submitForm}>
                                        <label className={classes.labelButton}>Ingresar</label>
                                    </Button>
                                </Grid>
                                <Grid item xs={3} md={3}></Grid>
                            </Grid>
                            {/* <Grid item sm={12} md={12} className={classes.textButtonContainer}>
                            <a className={classes.textOlvide}>Olvide mi contraseña</a>
                        </Grid> */}
                        </Grid>
                    </Grid>
                    <Hidden only={['sm', 'xs']}>
                        <Grid item xs={12} md={4} only="lg"></Grid>
                    </Hidden>
                </Form>
            )}
        </Formik>
    )
}

export default Login;