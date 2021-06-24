import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import ChequeCompra from '../pages/ChequeCompra';
import ChequeVenta from '../pages/ChequeVenta';
import CompraMonedaPage from '../pages/CompraMonedaPage';
import NotFound from '../pages/NotFound';
import VentaMonedaPage from '../pages/VentaMonedaPage';

const TransaccionRoute = (props) => {
        return (
          <>
            <Route path='/App/Transaccion/Moneda/Compra' component={CompraMonedaPage} />
            <Route path='/App/Transaccion/Moneda/Venta' component={VentaMonedaPage} />
            <Route path='/App/Transaccion/Cheque/Compra' component={ChequeCompra} />
            <Route path='/App/Transaccion/Cheque/Venta' component={ChequeVenta} />
          </>
        )
      }

    export default TransaccionRoute;