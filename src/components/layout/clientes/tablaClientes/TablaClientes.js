import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import HeaderPage from '../../utils/header/HeaderPage';
import NuevoCliente from '../tablaClientes/nuevo/NuevoCliente';
import TablaUtil from '../../utils/tabla/TablaUtil';
import {  IconButton } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';

const TablaClientes = () => {

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
      
    const rows = [
    { Id: 1, Name: 'Snow', Apellido: 'Jon', Email: 35, edit: 1},
    { Id: 2, Name: 'Lannister', Apellido: 'Cersei', Email: 42, edit: 12 },
    { Id: 3, Name: 'Lannister', Apellido: 'Jaime', Email: 45 ,edit: 13},
    { Id: 4, Name: 'Stark', Apellido: 'Arya', Email: 16 ,edit: 14},
    { Id: 5, Name: 'Targaryen', Apellido: 'Daenerys', Email: null ,edit: 15},
    { Id: 6, Name: 'Melisandre', Apellido: null, Email: 150,edit: 16 },
    { Id: 7, Name: 'Clifford', Apellido: 'Ferrara', Email: 44 ,edit: 17},
    { Id: 8, Name: 'Frances', Apellido: 'Rossini', Email: 36 ,edit: 18},
    { Id: 9, Name: 'Roxie', Apellido: 'Harvey', Email: 65 ,edit: 19},
    ];
      
    return (
        <Fragment>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                <HeaderPage titulo={'Clientes'} boton={<NuevoCliente />}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                {/* <EnhancedTable /> */}
                <TablaUtil rows={rows} columns={columns} title={'Clientes'}/>
            </Grid>
        </Fragment>
    );
}

export default TablaClientes;
