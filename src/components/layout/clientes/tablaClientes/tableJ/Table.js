import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
// import { lighten } from '@material-ui/core/styles/colorManipulator';
import EnhancedTableHead from './Header';
import EnhancedTableToolbar from './Toolbar';
import Utils from './Utils';

// eslint-disable-next-line no-unused-vars
let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
 return Utils.create(name, calories, fat, carbs, protein);
}


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,  
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  iconEdit:{
      marginLeft:'173px'
  }
});

class EnhancedTable extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'name',
    selected: [],
    data: [
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Donut', 452, 25.0, 51, 4.9),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
      createData('Honeycomb', 408, 3.2, 87, 6.5),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Jelly Bean', 375, 0.0, 94, 0.0),
      createData('KitKat', 518, 26.0, 65, 7.0),
      createData('Lollipop', 392, 0.2, 98, 0.0),
      createData('Marshmallow', 318, 0, 81, 2.0),
      createData('Nougat', 360, 19.0, 9, 37.0),
      createData('Oreo', 437, 18.0, 63, 4.0),
    ],
    page: 0,
    rowsPerPage: 5,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

 handleClick = (event, value) => {
        alert(JSON.stringify(value))
    }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };



  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          left: '20.76%',
         right: '71.18%',
        top: '35.35%',
        bottom: '62.89%',
        fontFamily: 'Titillium Web',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        color: '#002563',
        },
      }))(TableCell);

      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
            top: '30.94%',
            bottom: '61.29%',
          },
        },
      }))(TableRow);

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length} classes={classes} />

        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-label="customized table">
        
            <EnhancedTableHead numSelected={selected.length} order={order} orderBy={orderBy} onRequestSort={this.handleRequestSort} rowCount={data.length}/>
        
            <TableBody>
              {Utils.stableSort(data, Utils.getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <StyledTableRow  role="checkbox" aria-checked={isSelected} tabIndex={-1} key={n.id}>
                      <StyledTableCell  component="th" scope="row" align="left">{n.name}</StyledTableCell >
                      <StyledTableCell  align="right">{n.calories}</StyledTableCell >
                      <StyledTableCell  align="right">{n.fat}</StyledTableCell >
                      <StyledTableCell  align="right">{n.carbs}</StyledTableCell >
                      <StyledTableCell  align="right">{n.protein}</StyledTableCell >
                      <StyledTableCell  align="right" className={classes.iconEdit}><EditIcon  onClick={event => this.handleClick(event, n)}/></StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);