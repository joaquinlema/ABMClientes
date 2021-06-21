
import React, { Fragment, useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import { Avatar, Chip, Grid, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ChipUtils from '../../utils/chip/ChipUtils';
import HeaderMonedaPage from '../../utils/header/HeaderMonedaPage';
import NuevaCompra from '../nuevaMoneda/NuevaCompra';
import NuevaVenta from '../nuevaMoneda/NuevaVenta';
import Styles from './styles';
 


const data = [
    ["12/12/2021", "Venta", "Comercio SA", "Borrador"],
    ["12/12/2021", "Compra", "Comercio SA", "Pago Total"],
    ["12/12/2021", "Venta", "Petrobras", "Pendiente de Pago"],
    ["12/12/2021", "Venta", "YPF", "Vigente", "Pago Total"],
    ["12/12/2021", "Compra", "Hernadez Abogados", "Pago Parcial"]
];

const columns = ["Fecha", "Tipo", "Cliente",
    {
        name: "estado",
        options: {
            display: false,
            filter: false,
            sort: false,
        }
    },
    {
        name: "Estado",
        options: {
            filter: true,
            sort: false,
            empty: true,
            customBodyRender: (value, tableMeta, updateValue) => {

                return (
                    <ChipUtils label={tableMeta.rowData[3]} class={tableMeta.rowData[3].replace(/ /g, "")} />
                );
            }
        }
    },
    {
        name: "",
        options: {
            filter: true,
            sort: false,
            empty: true,
            customBodyRender: (value, tableMeta, updateValue) => {
                return (
                    <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => {
                        //dispatch(deleteUser(tableMeta.rowData[0]))
                    }}>
                        <EditIcon />
                    </IconButton>
                );


            }
        }
    },
];


const options = {
    selectableRows: 'none',
    download: false,
    print: false,
    filter: false,
    confirmFilters: false,
    search: false,
    viewColumns: false
};

const TablaMoneda = () => {

    const classes = Styles();
    return (
        <Fragment>
            <Grid  container item xs={12} sm={12} md={12} lg={12}>
                 <HeaderMonedaPage titulo={'Moneda'} botonCompra={<NuevaCompra/>} botonVenta={<NuevaVenta/>} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <MUIDataTable
                    title={"Listado Transacciones"}
                    className={classes.titulo}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </Grid>
            </Fragment>
    );
};

export default TablaMoneda;
