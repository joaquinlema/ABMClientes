import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import ChequesPage from '../pages/ChequesPage';
import ClientePage from '../pages/ClientePage';
import MonedaPage from '../pages/MonedaPage';
import NotFound from '../pages/NotFound';
import ParametrosGlobalesPage from '../pages/ParametrosGlobalesPage';
import ReportesPage from '../pages/ReportesPage';
import UsuarioPage from '../pages/UsuarioPagina';

const AppRoute = (props) => {
        return (
          <>
            <Route exact path={props.match.path} component={ReportesPage} />
            <Route path={`${props.match.path}/Home`} component={ReportesPage} />
            <Route path={`${props.match.path}/Usuarios`} component={UsuarioPage} />
            <Route path={`${props.match.path}/Clientes`} component={ClientePage} />
            <Route path={`${props.match.path}/Monedas`} component={MonedaPage} />
            <Route path={`${props.match.path}/Cheques`} component={ChequesPage} />
            <Route path={`${props.match.path}/ParamGlobales`} component={ParametrosGlobalesPage} />
            <Route component={NotFound} />
          </>
        )
      }

    export default AppRoute;