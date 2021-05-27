import { makeStyles} from '@material-ui/core/styles';
const divider={
  width: '175px',
  position: 'absolute',
  left: '24px',
  right: '40px',
  border:'1px solid',
  color:'#BFC8E0',
  transform:'rotate(180deg)'
 };
 const label =  {
    height:'16px',
    position: 'absolute',
    right: '40px',
    left: '17px',
    fontFamily: 'Titillium Web',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '16',
    marginLeft:'24px',
    letterSpacing:'0.4px',
    color: '#FFFFFF',
   }
  const drawerWidth = 239;
 export default makeStyles((theme) => ({ 
  root: {
    display: 'flex',
  },
  appBar: {
    height: '80px',
    width: '1440px',
    left: '0px',
    top: '0px',
    zIndex: theme.zIndex.drawer + 1,
    position: 'absolute',
    bottom: '1.23%',
    backgroundColor: '#FFFFFF',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
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
    width: '239px',
    position: 'absolute',
    left: '0%',
    right: '0.83%',
    top: '0%',
    bottom: '0%',
    backgroundColor: '#002563',
    height:'1024px'
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(6),
  },
 titleSistema:{
  width: '130px',
  height:'48px',
  position: 'absolute',
  left: '9.96%',
  right: '36.1%',
  top: '2.83%%',
  bottom: '92.48%',
  fontFamily: 'Titillium Web',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '22px',
  lineHeight: '24px',
  marginLeft:'24px',
  letterSpacing:'0.10px',
  color: '#FFFFFF',
  top:'29px',
  bottom:'125px'
 },
 divider:{
  width: '175px',
  position: 'absolute',
  left: '24px',
  right: '40px',
  border:'1px solid',
  color:'#BFC8E0',
  transform:'rotate(180deg)'
 },
 dividerMoneda:{
  
   top:'202px', 
   ...divider,
 },
 dividerTransferencia:{
  
   top:'358px', 
   ...divider,
 },
 dividerIngreso:{
    top:'462px', 
    ...divider,
  },
  dividerAdministracion:{
    top:'570px', 
    ...divider,
  },
 icono:{
   width:'16.78px',
   height:'21.94px',
   left:'40px',
   bottom:'71%',
   color:'#FFFFFF',
 },
 containerReporte:{
  top:'153px',
  marginLeft:'40px',
 },
 containerMoneda:{
  top:'240px',
  marginLeft:'40px',
  position:'absolute'
 },
 containerTransferencia:{
    top:'370px',
    marginLeft:'40px',
    position: 'absolute',
    left:'-5px'
   },
   containerIngreso:{
    top:'480px',
    marginLeft:'40px',
    position: 'absolute',
   },
   containerAdministracion:{
    top:'605px',
    marginLeft:'40px',
    position: 'absolute',
   },
 titleLink:{
  width: '121px',
  height:'18px',
  position: 'absolute',
  right: '40px',
  left: '17px',
  top: '2px',
  bottom: '92.48%',
  fontFamily: 'Titillium Web',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '16px',
  lineHeight: '18px',
  letterSpacing:'0.5px',
  marginLeft:'17.22px',
  color: '#FFFFFF',
 },
 labelCompra:{
     ...label,
     top: '-120px',
     left:'-20px'
     
 },
 labelAdministracion:{
    ...label,
    top: '-105px',
    left:'-20px'
},
textLogin:{
      top: '13.67%',
      left: '1331px',
      color: '#002563',
      width: '85px',
      bottom: '40.74%',
      height: '35px',
      position: 'absolute',
      fontSize: '16px',
      fontStyle: 'normal',
      textAlign: 'right',
      fontFamily: 'Titillium Web',
      fontWeight: 'bold',
      lineHeight: '18px',
      borderRadius: '10px',
      letterSpacing: '0.5px',
    },
    iconoLogin:{
      top: '13.67%',
      left: '1279px',
      color: '#FFFFFF',
      width: '35px',
      height: '35px',
      position: 'absolute',
      borderRadius: '10px',
      backgroundColor: '#00256',
    }
}));