import { Grid } from '@material-ui/core';
import React, { Fragment, useEffect } from 'react';
import HeaderPage from '../../utils/header/HeaderPage';
import NuevoUsuario from './nuevo/NuevoUsuario';
import TablaUtil from '../../utils/tabla/TablaUtil';
import {  IconButton } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux';
import {getUsuarios} from '../../../../actions/UsuarioActions';
import EdicionPopUp from '../../utils/popup/EdicionPopUp';

const TablaUsuarios = () => {

    const { usuarios } = useSelector(state => state.UsuarioReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsuarios());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const columns = ["Nombre", "Apellido","Usuario","Rol","Sucursal",
      {
        name: " ",
        options: {
          filter: true,
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
                <EdicionPopUp />
                // <IconButton color="primary" aria-label="upload picture" component="span" 
                // //onClick={() => dispatch(setEditUser({'id':tableMeta.rowData[0],'name':tableMeta.rowData[1], 'apellido':tableMeta.rowData[2], 'email':tableMeta.rowData[3] }))}
                // >
                //     <EditIcon />
                // </IconButton>
            );
          }
        }
      }
    ];

    const attr = ["nombre", "apellido","usuario","rol","sucursal"];

    const options = {
      selectableRows: false,
      download: false,
      print:false,
      filter:true,
      confirmFilters:false,
      viewColumns:false
  };
      
    return (
        <Fragment>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                <HeaderPage titulo={'Usuarios'} boton={<NuevoUsuario />}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <TablaUtil rows={usuarios} columns={columns} title={'Listado Total'} attr={attr} options={options}/>
            </Grid>
        </Fragment>
    );
}

export default TablaUsuarios;
