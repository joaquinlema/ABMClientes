import { Grid } from '@material-ui/core';
import React, { Fragment, useEffect } from 'react';
import HeaderPage from '../../utils/header/HeaderPage';
import NuevoCliente from '../tablaClientes/nuevo/NuevoCliente';
import TablaUtil from '../../utils/tabla/TablaUtil';
import {  IconButton } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux';
import {getClients} from '../../../../actions/ClienteActions';

const TablaClientes = () => {

    const {clientes} = useSelector(state => state.ClienteReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getClients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const columns = ["Id", "Name","Apellido","Email",
      {
        name: "Edit",
        options: {
          filter: true,
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
                <IconButton color="primary" aria-label="upload picture" component="span" 
                //onClick={() => dispatch(setEditUser({'id':tableMeta.rowData[0],'name':tableMeta.rowData[1], 'apellido':tableMeta.rowData[2], 'email':tableMeta.rowData[3] }))}
                >
                    <EditIcon />
                </IconButton>
            );
          }
        }
      }
    ];
      
    return (
        <Fragment>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                <HeaderPage titulo={'Clientes'} boton={<NuevoCliente />}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                {/* <EnhancedTable /> */}
                <TablaUtil rows={clientes} columns={columns} title={'Clientes'}/>
            </Grid>
        </Fragment>
    );
}

export default TablaClientes;
