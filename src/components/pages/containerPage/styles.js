import { makeStyles} from '@material-ui/core/styles';

const drawerWidth = 239;
 export default makeStyles((theme) => ({ 
  root: {
    display: 'flex',
  },
  appBar: {
    height: '80px',
    width: '100%',
    left: '0px',
    top: '0px',
    bottom: '1.23%',
    backgroundColor: '#FFFFFF',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: '246px',
    backgroundColor: '#002563',
  },

  toolbar: {
     display: 'flex',
    // alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    width:'100%'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
 titleSistema:{
  width: '130px',
  height:'48px',
  left: '9.96%',
  right: '36.1%',
  fontFamily: 'Titillium Web',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '24px',
  marginLeft:'24px',
  color: '#FFFFFF',
  margin: '12px',
 },
 divider:{
  width: '175px', 
  left: '24px',
  right: '40px',
  border:'1px solid',
  color:'#BFC8E0',
  transform:'rotate(180deg)',
  marginLeft: '20px',
 },
 icono:{
   width:'16.78px',
   height:'21.94px',
   color:'#FFFFFF',
   marginLeft:'30px'
 },

 titleLink:{
 
  fontFamily: 'Titillium Web',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '16px',
  color: '#FFFFFF',
 },

 label:{
  fontFamily: 'Titillium Web',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '12px',
  color: '#FFFFFF',
  marginLeft:'20px'
 },
textLogin:{
      top: '10.67%',
      marginTop:'40px',
      left: '100%',
      color: '#002563',
      width: '85px',
      bottom: '40.74%',
      height: '35px',
      fontSize: '16px',
      fontStyle: 'normal',
      textAlign: 'right',
      fontFamily: 'Titillium Web',
      fontWeight: 'bold',
      lineHeight: '18px',
      borderRadius: '10px',
      letterSpacing: '0.5px',
      marginLeft:'100px'
    },
    iconoLogin:{      
      color: '#FFFFFF',
      width: '35px',
      height: '35px',
      borderRadius: '10px',
      backgroundColor: '#002563',
    },
    containerLogin:{
      marginLeft: '90%',
    }
}));