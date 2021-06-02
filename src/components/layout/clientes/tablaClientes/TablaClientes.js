import { Grid } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react';
import HeaderPage from '../../utils/header/HeaderPage';
import NuevoCliente from '../tablaClientes/nuevo/NuevoCliente';
import TablaUtil from '../../utils/tabla/TablaUtil';
import { useDispatch, useSelector } from 'react-redux';
import {getClients, setEditClient, setDeleteClient, deleteClient} from '../../../../actions/ClienteActions';
import EdicionPopUp from '../../utils/popup/EdicionPopUp';
import ConfirmarPopUp from '../../utils/popup/ConfirmarPopUp';

const TablaClientes = () => {

    const [abrir, setabrir] = useState(false);
    const {clientes, clienteEliminar,labelBoton, textoMensaje, tituloDialogo} = useSelector(state => state.ClienteReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getClients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const columns = ["Alias", "Nombre","Telefono","Mail","Direccion",
      {
        name: " ",
        options: {
          filter: true,
          sort: false,
          empty: true,
          customBodyRender : (nada, row, rowIndex ) => {
            const dataOfRow = clientes.filter( e => e.alias === row.rowData[0] && e.mail === row.rowData[3])[0]
            return (
              <EdicionPopUp 
              accionEdicion={() => dispatch(setEditClient(dataOfRow)) }
              accionEliminar={() => {dispatch(setDeleteClient(dataOfRow)); setabrir(true);}}
              />
            );
          }
        }
      }
    ];

    const attr = ["alias", "nombre","telefono","mail","direccion","id"];

    const options = {
      selectableRows: 'none',
      download: false,
      print:false,
      filter:false,
      confirmFilters:false,
      viewColumns:false
  };
      
    return (
        <Fragment>
            <Grid container item xs={12} sm={12} md={12} lg={12} style={{marginLeft:'240px'}}>
                <HeaderPage titulo={'Clientes'} boton={<NuevoCliente />}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <TablaUtil rows={clientes} columns={columns} title={'Listado Total'} attr={attr} options={options}/>
            </Grid>
            <Grid>
              <ConfirmarPopUp status={abrir} cerrar={setabrir} labelBoton={labelBoton} titulo={tituloDialogo} mensaje={textoMensaje} accionBoton={() => dispatch(deleteClient(clienteEliminar.id))}/>
            </Grid>
        </Fragment>
    );
}

export default TablaClientes;
