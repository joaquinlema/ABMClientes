// import React from 'react'
// import { Grid, Button, TextField, InputLabel, OutlinedInput } from '@material-ui/core';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import IconButton from '@material-ui/core/IconButton';
// import Styles from './estilos'

// const Login = () => {
//     const classes = Styles();
//     const [values, setValues] = React.useState({
//         nombre: '',
//         password: '',
//         showPassword: false,
//     });

//     const handleChange = (prop) => (event) => {
//         setValues({ ...values, [prop]: event.target.value });
//     };

//     const handleClickShowPassword = () => {
//         setValues({ ...values, showPassword: !values.showPassword });
//     };

//     const setNombre = (prop) => (event) => {
//         setValues({ ...values, [prop]: event.target.value });
//     }
//     const validateUser = () => {
//         alert(JSON.stringify(values))
//     }
//     return (
//         <Grid className={classes.body} container>
//             <Grid item sm={12} md={12} >
//                 <h5 className={classes.bienvenido}>¡Bienvenido!</h5>
//             </Grid>
//             <Grid item sm={12} md={12} >
//                 <h3 className={classes.financiera}>Sistema de <br></br>Financiera</h3>
//             </Grid>
            
//             <Grid item sm={12} md={12} className={classes.containerInputNombre}>
//                 <InputLabel  className={classes.labelInput} >Nombre</InputLabel>
//                 <TextField id="outlined-basic" variant="outlined" onChange={setNombre("nombre")} value={values.nombre} className={classes.inputUsuario} />
//             </Grid>
//             <Grid item sm={12} md={12} className={classes.containerInput}>
//                 <InputLabel htmlFor="standard-adornment-password"className={classes.labelInput}>
//                     Password
//                  </InputLabel>
//                 <OutlinedInput
//                     type={values.showPassword ? 'text' : 'password'}
//                     value={values.password}
//                     onChange={handleChange('password')}
//                     className={classes.inputPassword}
//                     endAdornment={
//                         <InputAdornment>
//                             <IconButton
//                                 aria-label="toggle password visibility"
//                                 onClick={handleClickShowPassword}
//                                 className={classes.trailingIcon}
//                             >
//                                 {values.showPassword ? <Visibility /> : <VisibilityOff />}
//                             </IconButton>
//                         </InputAdornment>
//                     }
//                 />
//             </Grid>

//             <Grid item sm={12} md={12} className={classes.containerButton}>
//                 <Button variant="contained"  className={classes.button} onClick={validateUser}>
//                     <label className="-Label-Button">Aceptar</label>
//                 </Button>
//             </Grid>
//             <Grid item sm={12} md={12} className={classes.textButtonContainer}>
//                 <a className={classes.textOlvide}>Olvide mi contraseña</a>
//             </Grid>
//         </Grid>
//     )
// }

// export default Login;