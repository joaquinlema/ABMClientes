import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, HashRouter, Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import ChequesPage from '../pages/ChequesPage';
import ClientePage from '../pages/ClientePage';
import MonedaPage from '../pages/MonedaPage';
import ParametrosGlobalesPage from '../pages/ParametrosGlobalesPage';
import ReportesPage from '../pages/ReportesPage';
import UsuarioPage from '../pages/UsuarioPagina';
import TransferenciasExteriorPage from '../pages/TransferenciasExteriorPage';
import IngresoEgresosPage from '../pages/IngresosEgresosPage';

const AppRoute = (props) => {

        return (
          <>
            <Route path='/App/Common/'>
              <Redirect to="/App/Common/Reportes" />
            </Route>
            <Route path='/App/Common/Reportes' component={ReportesPage} />
            <Route path='/App/Common/Usuarios' component={UsuarioPage} />
            <Route path='/App/Common/Clientes' component={ClientePage} />
            <Route path='/App/Common/Monedas' component={MonedaPage} />
            <Route path='/App/Common/Cheques' component={ChequesPage} />
            <Route path='/App/Common/Transferencia' component={TransferenciasExteriorPage} />
            <Route path='/App/Common/ParamGlobales' component={ParametrosGlobalesPage} />
            <Route path='/App/Common/IngresoEgreso' component={IngresoEgresosPage} />
            
          </>
        )
      }

    export default AppRoute;