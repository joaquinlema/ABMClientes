import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '../Home';
import { BrowserRouter as Router, Switch, Route, Link, Redirect,useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import About from '../About';
import NotFound from '../NotFound';
import UsuarioPagina from '../UsuarioPagina';
import TareaPage from '../TareaPage';
import Login from '../../layout/login/Login'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import TuneIcon from '@material-ui/icons/Tune';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import WebIcon from '@material-ui/icons/Web';
import TelegramIcon from '@material-ui/icons/Telegram';
import { createBrowserHistory } from "history";
import ClientePage from '../ClientePage';
import styles from './styles'


export default function MiniDrawer() {
  const classes = styles();
  let histories = useHistory();
  const [open, setOpen] = React.useState(true);
  const history = createBrowserHistory();

  if (!localStorage.getItem('USER_FINANCIERA')) {
    return <Redirect to="/Login" />
  }

  const logout =()=>{
    localStorage.removeItem('USER_FINANCIERA');
    histories.push("/Login");
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={clsx(classes.appBar, { [classes.appBarShift]: open, })}>
        <Toolbar>
          <div className={classes.containerLogin}>
            <IconButton className={classes.iconoLogin} onClick={logout}>
              <PersonOutlineIcon  /><h5 className={classes.textLogin}>Hola ,{localStorage.getItem('USER_FINANCIERA')}</h5>
            </IconButton>  
          </div>
        </Toolbar>
      </AppBar>
      <Router history={history}>
        <Drawer variant="permanent" className={clsx(classes.drawer, { [classes.drawerOpen]: open,})} classes={{ paper: clsx({ [classes.drawerOpen]: open, }), }}>
          <div>
            <h5 className={classes.titleSistema}>
              Sistema <br></br>de Financiera
            </h5>

          </div>
          <div>
            <List>
              <ListItem button component={Link} to={'/Cliente'} className={classes.containerReporte} >
                <ListItemIcon ><AccountBalanceIcon className={classes.icono} /></ListItemIcon>
                <ListItemText className={classes.titleLink} primary="Reporte" />
              </ListItem>
            </List>
          </div>
          <Divider className={classes.dividerMoneda} />
          <List className={classes.containerMoneda}>
            <label className={classes.labelCompra}>COMPRA/VENTA</label>
            <ListItem button component={Link} to={'/Cliente'}  >
              <ListItemIcon ><AttachMoneyIcon className={classes.icono} /></ListItemIcon>
              <ListItemText className={classes.titleLink} primary="Moneda" />
            </ListItem>
            <ListItem button component={Link} to={'/Moneda'}  >
              <ListItemIcon ><WebIcon className={classes.icono} /></ListItemIcon>
              <ListItemText className={classes.titleLink} primary="Cheques" />
            </ListItem>
          </List>
          <Divider className={classes.dividerTransferencia} />
          <List className={classes.containerTransferencia}>
            <ListItem button component={Link} to={'/Moneda'}  >
              <ListItemIcon ><TelegramIcon className={classes.icono} /></ListItemIcon>
              <ListItemText className={classes.titleLink} >Transferencia <br></br> al exterior</ListItemText>
            </ListItem>
          </List>
          <Divider className={classes.dividerIngreso} />
          <List className={classes.containerIngreso}>
            <ListItem button component={Link} to={'/Moneda'} >
              <ListItemIcon ><SyncAltIcon className={classes.icono} /></ListItemIcon>
              <ListItemText className={classes.titleLink} >Ingreso y <br></br> egresos</ListItemText>
            </ListItem>
          </List>
          <Divider className={classes.dividerAdministracion} />
          <List className={classes.containerAdministracion}>
            <label className={classes.labelAdministracion}>ADMINISTRACION</label>
            <ListItem button component={Link} to={'/Moneda'}  >
              <ListItemIcon ><PeopleAltOutlinedIcon className={classes.icono} /></ListItemIcon>
              <ListItemText className={classes.titleLink} >Clientes</ListItemText>
            </ListItem>
            <ListItem button component={Link} to={'/Moneda'}  >
              <ListItemIcon ><PersonOutlineIcon className={classes.icono} /></ListItemIcon>
              <ListItemText className={classes.titleLink} >Usuarios</ListItemText>
            </ListItem>
            <ListItem button component={Link} to={'/Moneda'}  >
              <ListItemIcon ><TuneIcon className={classes.icono} /></ListItemIcon>
              <ListItemText className={classes.titleLink} >Parametros<br></br>globales</ListItemText>
            </ListItem>
          </List>

        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container>
            <Switch>
              <Route path='/User' component={UsuarioPagina} />
              <Route path='/Login' component={Login} />
              <Route path='/Tarea' component={TareaPage} />
              <Route path='/Cliente' component={ClientePage} />
              <Route path='/about' component={About} />
              <Route component={NotFound} />
            </Switch>
          </Grid>
        </main>
      </Router>
    </div>
  );
}