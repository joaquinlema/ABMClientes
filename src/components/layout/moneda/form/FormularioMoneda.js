import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button, LinearProgress, Grid } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import MyTextField from '../../clientes/form/textField/MyTextField';
import Autocomplete from '../../utils/autocomplete/AutocompleteUtils'
import * as Yup from "yup";
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '10px'
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
    titulo: {
        fontStyle: 'normal',
        fontWeight: 'bolder',
        fontSize: '22px',
        lineHeight: '24px',
        letterSpacing: '0.18px',
        color: '#002563',
        fontFamily: 'Titillium Web',
        marginLeft: '20px'
    },
}));

const FormularioMoneda = ({compra}) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const { clientes } = useSelector(state => state.ClienteReducer);
    let monedaValues = [
        { nombre: 'USD' },
        { nombre: 'ARS' }
    ]




    const SignupSchema = Yup.object().shape({
        // name: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').matches(/^[a-zA-Z ]+$/,"Invalid Name only letters").required('Required'),
    });


    const setValor=(setFieldValue,data,values)=>{
        setFieldValue('cotizacion',data);
        (values.tipoMoneda.nombre=='USD') ? setFieldValue('valorCotizacion',data*100) : setFieldValue('valorCotizacion',data/100)
    }

    const setTipoMoneda =(setFieldValue,data,values)=>{
        setFieldValue('tipoMoneda', data);
        (values.cotizacion) ? setValorCotizacion(setFieldValue,data,values) : setFieldValue('cotizacion',values.cotizacion);
    }

    const setValorCotizacion=(setFieldValue,data,values)=>{
        (data.nombre == "USD") ? setFieldValue('valorCotizacion',values.cotizacion * 100) :  setFieldValue('valorCotizacion',values.cotizacion / 100);
    }

    
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Formik
                initialValues={{
                    cliente: '',
                    cotizacion: '',
                    tipoMoneda: monedaValues[0],
                    valorCliente: '',
                    valorCotizacion: '',
                    descripcionCliente:'',

                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                     
                        setSubmitting(false);
                        alert(JSON.stringify(values));
                        resetForm();
                    
                    }, 500);
                }}
            >
                {({ submitForm, isSubmitting, setFieldValue, values }) => (
                    <Form>
                        <span className={classes.titulo}>{"Operacion"}</span>
                        <Grid container className={classes.root}>
                            <Grid item xs={5} md={5} lg={5} className={classes.grid}>
                                <Autocomplete OPTIONS_SELECT={clientes.sort()} ONCHANGE_SELECT={(_, data) => { setFieldValue('cliente', data) }} LABEL_SELECT="Cliente"></Autocomplete>
                            </Grid>
                            <Grid item xs={5} md={5} lg={5} className={classes.grid}>
                                <TextField  variant="outlined" className={classes.textField}  type="number" onChange={(value) => setValor(setFieldValue,value.currentTarget.value,values)}></TextField>
                            </Grid>
                            <Grid item xs={1} md={1} lg={1} className={classes.grid}>
                                <Autocomplete OPTIONS_SELECT={monedaValues} VALUES={values.tipoMoneda} ONCHANGE_SELECT={(_, data) => { setTipoMoneda(setFieldValue,data,values)}} LABEL_SELECT="Moneda"></Autocomplete>
                            </Grid>
                            <Grid item xs={5} md={5} lg={5} className={classes.grid}>
                                <MyTextField className={classes.textField} name="descripcionCliente" type="text" label="Descripcion cliente"></MyTextField>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6} className={classes.grid}>
                                {(values.tipoMoneda.nombre == 'USD') ? <MyTextField className={classes.textField} name="valorCotizacion" type="text" label="ARS"></MyTextField> :
                                    <MyTextField className={classes.textField} name="valorCotizacion" type="text" label="USD"></MyTextField>
                                }
                            </Grid>
                            <Grid item xs={6} md={6} lg={6} className={classes.grid}>
                                {isSubmitting && <LinearProgress />}
                            </Grid>
                              {compra && <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                ></Button> }
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

export default FormularioMoneda;