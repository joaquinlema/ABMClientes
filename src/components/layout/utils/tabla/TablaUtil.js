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

export default function TablaUtil({columns, rows, title, attr}) {

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
            e[attr[0]],
            e[attr[1]],
            e[attr[2]],
            e[attr[3]],
            e[attr[4]]
          ]
      })}
      columns={columns}
      options={options}
    />
  );
}