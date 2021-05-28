import { Button, IconButton, List, ListItem, ListItemText, Popover } from '@material-ui/core';
import React, { Fragment } from 'react';
import './popupestilo.css';
import EditIcon from '@material-ui/icons/Edit';

const EdicionPopUp = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Fragment>
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleClick} 
                //onClick={() => dispatch(setEditUser({'id':tableMeta.rowData[0],'name':tableMeta.rowData[1], 'apellido':tableMeta.rowData[2], 'email':tableMeta.rowData[3] }))}
                >
                    <EditIcon />
                </IconButton>
            <Popover 
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <List component="nav" className='popup'>
                    <ListItem button onClick={() => { alert('clicked') }}>
                        <ListItemText primary="Editar" />
                    </ListItem>
                    <ListItem button onClick={() => { alert('clicked2') }}>
                        <ListItemText primary="Eliminar" />
                    </ListItem>
                </List>
            </Popover>
        </Fragment>
    );
}

export default EdicionPopUp;
