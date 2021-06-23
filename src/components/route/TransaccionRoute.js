import React from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import ChequeCompra from '../pages/ChequeCompra';
import ChequeVenta from '../pages/ChequeVenta';
import CompraMonedaPage from '../pages/CompraMonedaPage';
import NotFound from '../pages/NotFound';
import VentaMonedaPage from '../pages/VentaMonedaPage';

const TransaccionRoute = (props) => {
        return (
          <>
            <Route exact path={props.match.path} component={NotFound} />
            <Route path={`${props.match.path}/Moneda`} component={NotFound} />
            <Route path={`${props.match.path}/Cheque`} component={NotFound} />
            <Route path={`${props.match.path}/Moneda/Compra`} component={CompraMonedaPage} />
            <Route path={`${props.match.path}/Moneda/Venta`} component={VentaMonedaPage} />
            <Route path={`${props.match.path}/Cheque/Compra`} component={ChequeCompra} />
            <Route path={`${props.match.path}/Cheque/Venta`} component={ChequeVenta} />
            <Route component={NotFound} />
          </>
        )
      }

    export default TransaccionRoute;