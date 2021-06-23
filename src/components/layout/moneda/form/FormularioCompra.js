import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPagoUSD, setPagoARS } from '../../../../actions/FormularioMonedaAction'
import { Formik, Form } from 'formik';
import { Button, LinearProgress, Grid,Divider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import MyTextField from '../../clientes/form/textField/MyTextField';
import Autocomplete from '../../utils/autocomplete/AutocompleteUtils'
import * as Yup from "yup";
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import IconButtonUtils from '../../utils/iconButton/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SwitchUtils from '../../utils/swicht/SwichtUtils';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import AlertUtils from '../../utils/alert/AlertUtils';
import CuentaCorriente from './Card/CuentaCorriente'


const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '10px'
    },
    gridCuenta: {
        width: '100%',
        margin: '40px'
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
    rootPago: {
        left: '20%',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 5px 10px rgba(0, 37, 99, 0.05)',
        borderRadius: '12px',
        marginTop:'20px',
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
    label: {
        marginLeft: '20px',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '0.4px',
        color: 'rgba(0, 37, 99, 0.6)',
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
    gridTitle: {
        marginBottom: '20px'
    },
    gridTitlePago: {
        marginTop: '40px',   
    },
    icon: {
        color: '#002563',
    },
    labelDefectuoso: {
        fontFamily: 'Titillium Web',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        color: '#002563',
    },

}));

const FormularioMoneda = ({ compra }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [expandUno, setExpandUno] = React.useState(true);
    const { clientes } = useSelector(state => state.ClienteReducer);

    let monedaValues = [
        { nombre: 'USD' },
        { nombre: 'ARS' }
    ]


    const setSeccionUno = () => {
        setExpandUno(!expandUno);
    }



    const SignupSchema = Yup.object().shape({
        // name: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').matches(/^[a-zA-Z ]+$/,"Invalid Name only letters").required('Required'),
    });


    const setValor = (setFieldValue, data, values) => {
        setFieldValue('valorComprar', data);
        (values.tipoMoneda.nombre == 'USD') ? setFieldValue('valorPagar', data * 100) : setFieldValue('valorPagar', data / 100);
        if (data != "") {
            (values.tipoMoneda.nombre == "USD") ? dispatch(setPagoARS(data * 100)) : dispatch(setPagoARS(data / 100));
            (values.tipoMoneda.nombre == "USD") ? dispatch(setPagoUSD(data)) : dispatch(setPagoUSD(data));
        } else {
            dispatch(setPagoARS("0,00"));
            dispatch(setPagoUSD("0,00"))
        }


    }

    const setTipoMoneda = (setFieldValue, data, values) => {
        setFieldValue('tipoMoneda', data);
        (values.valorComprar) ? setValorCotizacion(setFieldValue, data, values) : setFieldValue('valorComprar', values.valorComprar);
        if (values.valorComprar != '') {
            (data.nombre == 'ARS') ? dispatch(setPagoARS(values.valorComprar)) : dispatch(setPagoARS(values.valorComprar * 100));
            (data.nombre == 'USD') ? dispatch(setPagoUSD(values.valorComprar)) : dispatch(setPagoUSD(values.valorComprar / 100));
        } else {
            dispatch(setPagoARS("0,00"));
            dispatch(setPagoUSD("0,00"))
        }

    }

    const setValorCotizacion = (setFieldValue, data, values) => {
        (data.nombre == "USD") ? setFieldValue('valorPagar', values.valorComprar * 100) : setFieldValue('valorPagar', values.valorComprar / 100);

    }


    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Formik
                initialValues={{
                    cliente: '',
                    tipoMoneda: monedaValues[0],
                    valorCliente: '',
                    descripcionCliente: '',
                    valorComprar: '',
                    valorPagar: '',
                    cotizacionDolar: 100

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
                        <Grid container spacing={3}>
                            <Grid item xs={6} md={6} lg={6} className={classes.gridTitle}>
                                <label className={classes.titulo}>{"Operacion"}</label>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6} className={classes.gridTitle} position="right">
                                <label className={classes.label}>{"Paso 1"}</label>
                                {(expandUno) ? <IconButtonUtils ICON_BUTTON={<ExpandMoreIcon />} ICON_ACCION={setSeccionUno} /> :
                                    <IconButtonUtils ICON_BUTTON={<ExpandLessIcon />} ICON_ACCION={setSeccionUno} />}
                            </Grid>
                        </Grid>{(expandUno) ?
                            <Grid container className={classes.rootPago}>
                                <Grid item xs={5} md={5} lg={5} className={classes.grid}>
                                    <label className={classes.label}>{"Cliente"}</label>
                                    <Autocomplete OPTIONS_SELECT={clientes.sort()} FILTER={'alias'} ONCHANGE_SELECT={(_, data) => { setFieldValue('cliente', data) }}></Autocomplete>
                                </Grid>
                                <Grid item xs={5} md={5} lg={5} className={classes.grid}>
                                    <label className={classes.label}>{"Valor de Venta"}</label>
                                    <TextField variant="outlined" className={classes.textField} type="number" onChange={(value) => setValor(setFieldValue, value.currentTarget.value, values)}></TextField>
                                </Grid>
                                <Grid item xs={1} md={1} lg={1} className={classes.grid}>
                                    <label className={classes.label}>{"Moneda"}</label>
                                    <Autocomplete OPTIONS_SELECT={monedaValues} FILTER={"nombre"} VALUES={values.tipoMoneda} ONCHANGE_SELECT={(_, data) => { setTipoMoneda(setFieldValue, data, values) }}></Autocomplete>
                                </Grid>
                                <Grid item xs={5} md={5} lg={5} className={classes.grid}>
                                    <label className={classes.label}>{"Cotizacion"}</label>
                                    <TextField className={classes.textField} variant="outlined" value={values.cotizacionDolar} disabled type="text"></TextField>
                                </Grid>
                                <Grid item xs={5} md={5} lg={5} className={classes.grid}>
                                    <label className={classes.label}>{"Valor de pago"}</label>
                                    {(values.tipoMoneda.nombre == 'USD') ? <MyTextField className={classes.textField} name="valorPagar" type="text"></MyTextField> :
                                        <MyTextField className={classes.textField} name="valorPagar" type="text" ></MyTextField>
                                    }
                                </Grid>


                                <Grid item xs={12} md={12} lg={12} className={classes.grid}>
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
                            </Grid> : <Grid />}
                        <Grid item xs={6} md={6} lg={6} className={classes.gridTitlePago}>
                            <label className={classes.titulo}>{"Pago"}</label>
                        </Grid>
                        <Grid container className={classes.root}>
                            <Grid item item xs={12} md={12} lg={12} className={classes.gridTitlePago}>
                                <label className={classes.titulo}>{"En USD"}</label>
                            </Grid>

                            <Grid item xs={5} md={5} lg={5} className={classes.grid}>
                                <label className={classes.label}>{"Valor de Venta"}</label>
                                <TextField variant="outlined" className={classes.textField} type="number" onChange={(value) => setValor(setFieldValue, value.currentTarget.value, values)}></TextField>
                            </Grid>
                            <Grid item xs={5} md={5} className={classes.grid} className={classes.grid}>
                                <CuentaCorriente CHIP_LABEL={"Cuenta Corriente USD"} SALDO={"0,00"} POST={"-500"}/>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                <SwitchUtils></SwitchUtils> <label className={classes.labelDefectuoso}>{"Dinero Defectuoso"}</label>{' '}<ErrorOutlineIcon className={classes.icon} />
                            </Grid>
                            <Grid item xs={5} md={5} lg={5} className={classes.grid}>
                                <label className={classes.label}>{"Reclamar"}</label>
                                <TextField variant="outlined" className={classes.textField} type="number"></TextField>
                            </Grid>
                        
                            <Grid item xs={5} md={5} lg={5} className={classes.grid}>
                                <label className={classes.label}>{"Desestimar"}</label>
                                <TextField variant="outlined" className={classes.textField} type="number"></TextField>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                <AlertUtils TYPE={"warning"} CLASS={"DineroDefectuoso"} LABEL={"Este cliente supera el 20% de dinero defectuoso en los ultimos 60 dias"} />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                   <Divider/>
                            </Grid>
                            <Grid item item xs={12} md={12} lg={12} className={classes.gridTitlePago}>
                                <label className={classes.titulo}>{"En ARS"}</label>
                            </Grid>
                            <Grid item xs={5} md={5} lg={5} className={classes.grid}>
                                <label className={classes.label}>{"Valor de Venta"}</label>
                                <TextField variant="outlined" className={classes.textField} type="number"></TextField>
                            </Grid>
                            <Grid item xs={5} md={5} className={classes.grid} className={classes.grid}>
                                <CuentaCorriente CHIP_LABEL={"Cuenta Corriente ARS"} SALDO={"0,00"} POST={"-500"}/>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                   <Divider/>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                <label className={classes.label}>{"informacion Adicional de la transacción"}</label>
                                <TextField variant="outlined" className={classes.textField} type="text" placeholder={"Una linea de texto de informacion adicional"}></TextField>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </MuiPickersUtilsProvider>
    );
}

export default FormularioMoneda;