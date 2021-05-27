import { Grid } from '@material-ui/core';
import React, { Fragment, useEffect } from 'react';
import HeaderPage from '../../utils/header/HeaderPage';
import NuevoUsuario from './nuevo/NuevoUsuario';
import TablaUtil from '../../utils/tabla/TablaUtil';
import {  IconButton } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux';
import {getUsuarios} from '../../../../actions/UsuarioActions';

const TablaUsuarios = () => {

    const {usuarios} = useSelector(state => state.UsuarioReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsuarios());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const columns = ["Alias", "Nombre","Telefono","Mail","Direccion",
      {
        name: " ",
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

    const attr = ["alias", "nombre","telefono","mail","direccion"]
      
    return (
        <Fragment>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                <HeaderPage titulo={'Usuarios'} boton={<NuevoUsuario />}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <TablaUtil rows={usuarios} columns={columns} title={'Listado Total'} attr={attr}/>
            </Grid>
        </Fragment>
    );
}

export default TablaUsuarios;
