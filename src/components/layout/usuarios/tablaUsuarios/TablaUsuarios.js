import { Grid } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react';
import HeaderPage from '../../utils/header/HeaderPage';
import NuevoUsuario from './nuevo/NuevoUsuario';
import TablaUtil from '../../utils/tabla/TablaUtil';
import { useDispatch, useSelector } from 'react-redux';
import {getUsuarios, setEditUser, setDeleteUser, deleteUser} from '../../../../actions/UsuarioActions';
import EdicionPopUp from '../../utils/popup/EdicionPopUp';
import ConfirmarPopUp from '../../utils/popup/ConfirmarPopUp';
import Progress from '../../progress/Progress'
import UserDTO from '../../../../DTO/UserDTO';

const TablaUsuarios = () => {
  const [abrir, setabrir] = useState(false);
  const { usuarios , usuarioEliminar, labelBoton, textoMensaje, tituloDialogo,loading} = useSelector(state => state.UsuarioReducer);
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsuarios());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
      return (
        <Progress />
      );
    }

    const columns = [{name: "Nombre", options: {display: true, viewColumns: false, filter: false}}, 
    {name : "Apellido",options: {display: true, viewColumns: false, filter: false}},
    {name: "Usuario",options: {display: true, viewColumns: false, filter: false}},
    {name: "Rol",options: {display: true, viewColumns: false, filter: true, 
      customBodyRender: (nada, row, rowIndex) => {
        let valorRol = UserDTO.getUsersRols().filter(elem => elem.id === row.rowData[3])[0].rol;
        return (
            <span>{valorRol}</span>
        );
      }}},
    {name: "Sucursal",options: {display: true, viewColumns: false, filter: false}},
      {
        name: " ",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRender: (nada, row, rowIndex) => {
            const dataOfRow = usuarios.filter( e => e.lastName === row.rowData[0] && e.firstName === row.rowData[1])[0]
            return (
                <EdicionPopUp 
                accionEdicion={() => dispatch(setEditUser(dataOfRow)) }
                accionEliminar={() => {dispatch(setDeleteUser(dataOfRow)); setabrir(true);}}
                />
            );
          }
        }
      }
    ];

    const attr = ["lastName", "firstName","userCode","role","branchOffice","userId"];

    const options = {
      selectableRows: 'none',
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
            <Grid>
              <ConfirmarPopUp status={abrir} cerrar={setabrir} labelBoton={labelBoton} titulo={tituloDialogo} mensaje={textoMensaje} accionBoton={() => dispatch(deleteUser(usuarioEliminar.userId))}/>
            </Grid>
        </Fragment>
    );
}

export default TablaUsuarios;
