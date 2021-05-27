import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './tabla.css';
import MUIDataTable from "mui-datatables";

const useStyles = makeStyles((theme) => ({
  titulo: {
      fontFamily: 'Titillium Web',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '34px',
      lineHeight: '36px',
      color: '#5974FB',
      marginTop:'53px'
  },
  paper:{
    height: '764px', 
    width: '100%',
    borderRadius: '12px',
    padding: '20px',
    paddingTop: '40px',
    paddingBottom: '49px',
    marginTop: '30px'
  }
}));

export default function TablaUtil({columns, rows, title}) {

  const classes = useStyles();

  const options = {
    selectableRows: false,
    download: false,
    print:false,
    filter:false,
    confirmFilters:false,
    viewColumns:false
};

return (
    <MUIDataTable
      className={classes.titulo}
      title={title}
      data={rows.map(e=>{
          return [
              e[columns[0]],
              e[columns[1]],
              e[columns[2]],
              e[columns[3]]
          ]
      })}
      columns={columns}
      options={options}
    />
  );
}