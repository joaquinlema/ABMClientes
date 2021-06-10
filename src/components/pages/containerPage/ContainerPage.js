import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { logout } from '../../../actions/LoginActions'
import {Drawer,AppBar,Toolbar,List,ListItemIcon,Grid,Divider,CssBaseline,IconButton,ListItem,ListItemText} from '@material-ui/core'
import clsx from 'clsx';
import { BrowserRouter as Router, Switch, Route, Link, Redirect,useHistory,useLocation } from 'react-router-dom';
import { createBrowserHistory } from "history";
import ClientePage from '../ClientePage';
import NotFound from '../NotFound';
import About from '../About';
import MonedaPage from '../MonedaPage'
import UsuarioPagina from '../UsuarioPagina';
import Login from '../../layout/login/Login';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import TuneIcon from '@material-ui/icons/Tune';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import WebIcon from '@material-ui/icons/Web';
import TelegramIcon from '@material-ui/icons/Telegram';
import styles from './styles'


const MiniDrawer = () => {

  const classes = styles();
  let histories = useHistory();
  const dispatch = useDispatch();
  const {autorizado}  = useSelector(state => state.LoginReducer);
  const [open, setOpen] = React.useState(true);
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const history = createBrowserHistory();

  if (!autorizado && !sessionStorage.getItem('USER_FINANCIERA')) {
   
    return <Redirect to="/Login" />
  }

  const logoutIn =()=>{
    sessionStorage.removeItem('USER_FINANCIERA');
    dispatch(logout());
    histories.push("/Login"); 
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={clsx(classes.appBar, { [classes.appBarShift]: open, })}>
        <Toolbar>
          <div className={classes.containerLogin}>
            <IconButton onClick={logoutIn}>
              <PersonOutlineIcon className={classes.iconoLogin}/><h5 className={classes.textLogin}>{"Hola" +","+sessionStorage.getItem('USER_FINANCIERA')}</h5>
            </IconButton>  
          </div>
        </Toolbar>
      </AppBar>
      <Router history={history}>
        <Drawer variant="permanent" className={clsx(classes.drawer, { [classes.drawerOpen]: open,})} classes={{ paper: clsx({ [classes.drawerOpen]: open, }), }}>
            <Grid container> 
            <Grid item xs={12} md={12}>
            <h5 className={classes.titleSistema}>
              Sistema <br></br>de Financiera
            </h5>
            </Grid>
            <Grid item xs={12} md={12} className={classes.gridReporte}>
              <List>
              <ListItem button component={Link} to={'/Cliente'} >
                <ListItemIcon ><AccountBalanceIcon className={classes.icono} /></ListItemIcon>
                <ListItemText className={classes.titleLink}  primary="Reporte" />
              </ListItem>
            </List>
            </Grid>      
            <Divider className={classes.divider} />
          <Grid item xs={12} md={12}>
          <List>
            <label className={classes.label}>COMPRA/VENTA</label>
            <ListItem button component={Link} to={'/Moneda'}  >
              <ListItemIcon ><AttachMoneyIcon className={classes.icono} /></ListItemIcon>
              <ListItemText className={classes.titleLink}  primary="Moneda" />
            </ListItem>
            <ListItem button component={Link} to={'/Moneda'}  >
              <ListItemIcon ><WebIcon className={classes.icono} /></ListItemIcon>
              <ListItemText  className={classes.titleLink}  primary="Cheques" />
            </ListItem>
          </List>
          </Grid>  
          <Divider className={classes.divider} />
          <Grid item xs={12} md={12}>
          <List>
            <ListItem button component={Link} to={'/Moneda'}  >
              <ListItemIcon ><TelegramIcon className={classes.icono} /></ListItemIcon>
              <ListItemText className={classes.titleLink} >Transferencia <br></br> al exterior</ListItemText>
            </ListItem>
          </List>
          </Grid>
          <Divider className={classes.divider} />
          <Grid item xs={12} md={12}>
          <List>
            <ListItem button component={Link} to={'/Moneda'} >
              <ListItemIcon ><SyncAltIcon className={classes.icono} /></ListItemIcon>
              <ListItemText className={classes.titleLink} >Ingreso y <br></br> egresos</ListItemText>
            </ListItem>
          </List>
          </Grid>
          <Divider className={classes.divider} />
          <Grid item xs={12} md={12}>
          <List>
            <label className={classes.label}>ADMINISTRACION</label>
            <ListItem button component={Link} to={'/Cliente'}  >
              <ListItemIcon ><PeopleAltOutlinedIcon className={classes.icono} /></ListItemIcon>
              <ListItemText className={classes.titleLink}  >Clientes</ListItemText>
            </ListItem>
            <ListItem button component={Link} to={'/User'}  >
              <ListItemIcon ><PersonOutlineIcon className={classes.icono} /></ListItemIcon>
              <ListItemText className={classes.titleLink}  >Usuarios</ListItemText>
            </ListItem>
            <ListItem button component={Link} to={'/Moneda'}  >
              <ListItemIcon ><TuneIcon className={classes.icono} /></ListItemIcon>
              <ListItemText className={classes.titleLink}  >Parametros<br></br>globales</ListItemText>
            </ListItem>
          </List>
          </Grid>
         </Grid>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container>
            <Switch>
              <Route path='/User' component={UsuarioPagina} />
              <Route path='/Cliente' component={ClientePage} />
              <Route path='/about' component={About} />
              <Route path='/Login' component={Login} />
              <Route path='/Moneda' component={MonedaPage} />
              <Route component={NotFound} />
            </Switch>
          </Grid>
        </main>
      </Router>
    </div>
  );
}

export default MiniDrawer;