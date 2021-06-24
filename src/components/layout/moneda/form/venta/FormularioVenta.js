import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button, LinearProgress, Grid, Divider,Tooltip  } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import MyTextField from '../../../clientes/form/textField/MyTextField';
import Autocomplete from '../../../utils/autocomplete/AutocompleteUtils';
import * as Yup from "yup";
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import IconButtonUtils from '../../../utils/iconButton/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SwitchUtils from '../../../utils/swicht/SwichtUtils';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import AlertUtils from '../../../utils/alert/AlertUtils';
import CuentaCorriente from '../Card/CuentaCorriente';
import { set } from 'date-fns';


const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        marginTop: '10px',
        marginLeft:'10px'
    },
    gridLabel:{
        marginTop: '30px',
        marginLeft:'10px'
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
        marginTop: '20px',
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

const FormularioVenta = ({ compra }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [expandUno, setExpandUno] = React.useState(true);
    const { clientes } = useSelector(state => state.ClienteReducer);

    let monedaValues = [
        { nombre: 'USD' },
        { nombre: 'ARS' },
        { nombre: 'EUR' }
    ]


    const setSeccionUno = () => {
        setExpandUno(!expandUno);
    }



    const SignupSchema = Yup.object().shape({
        valorPagar: Yup.string().min(1, 'Too Short!').max(70, 'Too Long!').matches(/^[0-9]+$/, "Solo Numeros").required('Required'),
    });




    const setValor = (data, values, setFieldValue) => {
        setFieldValue('valorComprar', data);
        setFieldValue('saldoARS', data);
        setFieldValue('valorPagar', data / values.cotizacion);
        setFieldValue('saldoMoneda', data / values.cotizacion);
    }
  

    const setCotizacion=(data, values, setFieldValue)=>{
        setFieldValue('cotizacion', data);
        setFieldValue('valorPagar', values.valorComprar / data);
        setFieldValue('saldoMoneda', values.valorComprar / data);
    }


    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Formik
                initialValues={{
                    cliente: '',
                    tipoMoneda: monedaValues[0],
                    descripcionCliente: '',
                    valorComprar: '',
                    valorPagar: '',
                    cotizacion: 100,
                    dineroDefectuoso:false,

                    //cuentaCorriente 
                    saldoARS:'',
                    saldoMoneda:''
                    
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
                {({ submitForm, isSubmitting, setFieldValue, values,errors }) => (
                    <Form>
                        <Grid container spacing={3}>
                            <Grid item xs={9} md={9} lg={9} className={classes.gridTitle}>
                                <label className={classes.titulo}>{"Operacion"}</label>
                            </Grid>
                            <Grid item xs={3} md={3} lg={3} className={classes.gridTitle} position="right">
                                <label className={classes.label}>{"Paso 1"}</label>
                                {(expandUno) ? <IconButtonUtils ICON_BUTTON={<ExpandMoreIcon />} ICON_ACCION={setSeccionUno} /> :
                                    <IconButtonUtils ICON_BUTTON={<ExpandLessIcon />} ICON_ACCION={setSeccionUno} />}
                            </Grid>
                        </Grid>{(expandUno) ?
                            <Grid container className={classes.root}>
                                <Grid item xs={5} md={5} lg={5} className={classes.grid}>
                                    <label className={classes.label}>{"Cliente"}</label>
                                    <Autocomplete OPTIONS_SELECT={clientes.sort()} FILTER={'alias'} ONCHANGE_SELECT={(_, data) => { setFieldValue('cliente', data) }}></Autocomplete>
                                </Grid>
                                <Grid item xs={5} md={5} lg={5} className={classes.gridLabel}>
                                    <TextField variant="outlined" className={classes.textField} type="number" placeholder={"ARS"} onChange={(value) => setValor(value.currentTarget.value, values, setFieldValue)}></TextField>
                                </Grid>
                                <Grid item xs={5} md={5} lg={5} className={classes.grid}>
                                <label className={classes.label}>{"Cotizacion"}</label>
                                    <TextField className={classes.textField} variant="outlined"  value={values.cotizacion} type="number" onChange={(value) => setCotizacion(value.currentTarget.value, values, setFieldValue)}/>
                                </Grid>
                                <Grid item xs={4} md={4} lg={4} className={classes.gridLabel}>
                                    <MyTextField className={classes.textField} name="valorPagar" type="number"></MyTextField>
                                </Grid>
                                <Grid item xs={2} md={2} lg={2} className={classes.gridLabel}>
                                    <Autocomplete OPTIONS_SELECT={monedaValues} FILTER={"nombre"} VALUES={values.tipoMoneda}  ONCHANGE_SELECT={(_, data) => { setFieldValue('tipoMoneda', data) }}></Autocomplete>
                                </Grid>

                                <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                    {isSubmitting && <LinearProgress />}
                                </Grid>
                            </Grid> : <Grid />}
                        <Grid item xs={6} md={6} lg={6} className={classes.gridTitlePago}>
                            <label className={classes.titulo}>{"Pago"}</label>
                        </Grid>
                         {(values.cliente && values.tipoMoneda) ?
                        <Grid container className={classes.root}>
                            <Grid item item xs={12} md={12} lg={12} className={classes.gridTitlePago}>
                                <label className={classes.titulo}>{"En ARS"}</label>
                            </Grid>
                            <Grid item xs={5} md={5} lg={5} className={classes.gridLabel}>
                                <TextField variant="outlined" className={classes.textField} value={values.saldoARS} type="number"></TextField>
                            </Grid>
                            <Grid item xs={5} md={5}  className={classes.grid}>
                                <CuentaCorriente CHIP_LABEL={"Cuenta Corriente ARS"} SALDO={"0,00"} POST={"-500"}/>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                <SwitchUtils ONCHANGE={() => {setFieldValue('dineroDefectuoso', !values.dineroDefectuoso)}}/> <label className={classes.labelDefectuoso}>{"Dinero Defectuoso"}</label>{' '} <Tooltip title="Dinero manchado, roto o en mal estado" placement="bottom"><ErrorOutlineIcon className={classes.icon} /></Tooltip>
                            </Grid>
                           {(values.dineroDefectuoso) ?
                            <Grid  item xs={5} md={5} lg={5} className={classes.grid}>
                                <label className={classes.label}>{"Reclamar"}</label>
                                <TextField variant="outlined" className={classes.textField}  type="number"></TextField>
                            </Grid> : <Grid/>}  {(values.dineroDefectuoso) ?
                            <Grid item xs={5} md={5} lg={5} className={classes.grid}>
                                <label className={classes.label}>{"Desestimar"}</label>
                                <TextField variant="outlined" className={classes.textField} type="number"></TextField>
                            </Grid>  : <Grid/>} 
                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                <AlertUtils TYPE={"warning"} CLASS={"DineroDefectuoso"} LABEL={"Este cliente supera el 20% de dinero defectuoso en los ultimos 60 dias"} />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                   <Divider/>
                            </Grid>
                            <Grid item item xs={12} md={12} lg={12} className={classes.gridTitlePago}>
                                <label className={classes.titulo}>{values.tipoMoneda.nombre}</label>
                            </Grid>
                            <Grid item xs={5} md={5} lg={5} className={classes.gridLabel}>
                                <TextField variant="outlined" className={classes.textField} type="number" value={values.saldoMoneda}></TextField>
                            </Grid>
                            <Grid item xs={5} md={5} className={classes.grid} className={classes.grid}>
                                <CuentaCorriente CHIP_LABEL={"Cuenta Corriente USD"} SALDO={"0,00"} POST={"-500"}/>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                   <Divider/>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                <label className={classes.label}>{"Información Adicional de la transacción"}</label>
                                <TextField variant="outlined" className={classes.textField} type="text" placeholder={"Una linea de texto de información adicional"}></TextField>
                            </Grid>
                        </Grid>:<Grid/>}
                    </Form>
                )}
            </Formik>
        </MuiPickersUtilsProvider>
    );
}

export default FormularioVenta;