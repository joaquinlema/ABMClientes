
import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({

   bienvenido: {
      color: "#5974FB",
      borderRadius: 'nullpx',
      fontFamily: 'Titillium Web',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '22px',
      lineHeight: '24px',
      letterSpacing: '0.18px',
      textAlign: 'center',
      marginBottom: '-30px'
   },
   grid: {
      margin:'5px'
    },
    gridButtom: {
      marginTop: '18px',
    },
    gridBienvenido: {
      marginTop: '100px',
    },
   financiera: {
      borderRadius: 'nullpx',
      fontFamily: 'Titillium Web',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '48px',
      lineHeight: '56px',
      textAlign: 'center',
      color: '#FFFFFF',
      marginBottom: '10px'
   },

   inputUsuario: {
      width: '100%',
      background: '#FFFFFF',
      borderRadius: '4px',
      backgroundColor: '#FFFFFF',
      textAlign: 'center',
   },
   labelInput: {
      height: '16px',
      top: '0px',
      borderRadius: 'nullpx',
      marginBottom: '5px',
      fontFamily: 'Titillium Web',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.4px',
      color: '#FFFFFF',
   },
   inputPassword: {
      width: '100%',
      background: '#FFFFFF',
      borderRadius: '4px',
      backgroundColor: '#FFFFFF',
      border: '1px solid #E0E0E0',
      boxSizing: 'border-box',
      borderRadius: '4px',

   },
   trailingIcon: {
      width: '24px',
      height: '24px',
      margin: '0 0 1px',
      padding: '5px 1px 4px',
   },
   button: {
      height: '40px',
      width: '80%',
      textAlign: 'center',
      backgroundColor: '#5974FB',
      borderRadius: '4px',
      color: '#FFFFFF',
      '&:hover': {
         backgroundColor: '#5974FB',
         color: '#FFFFFF',
      }
   },
   labelButton: {
      height: '16px',
      width: '187px',
      left: '15px',
      borderRadius: 'nullpx',   
      left: '15px',
      right: '13px',
      top: 'calc(50% - 16px/2)',
      fontFamily: 'Titillium Web',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '16px',
      textAlign: 'center',
      color: '#FFFFFF',
      
   },
   label:{
      marginLeft: '20px',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.4px',
      color: '#FFFFFF',
      fontFamily:'Titillium Web'
  },
   textOlvide: {
      height: '16px',
      left: '-27px',
      right: '-27px',
      top: 'calc(50% - 16px/2)',
      fontFamily: 'Titillium Web',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '16px',
      textAlign: 'center',
      color: '#FFFFFF',
      borderRadius: 'nullpx',

   },
   textButtonContainer: {
      right: '47.5%',
      top: '0.31%',
      bottom: '25.78%',
      height: '40px',
      width: '74px',
      borderRadius: '0px'
   },
   body: {
      background: '#002563',
      height:'100%',
   }
}))