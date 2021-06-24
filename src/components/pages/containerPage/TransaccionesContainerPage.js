import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { IconButton, Typography } from '@material-ui/core';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import TransaccionRoute from '../../route/TransaccionRoute';

export default function TransaccionesContainerPage() {

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className='NavBar'>
        <Toolbar>
            <Typography variant="h5">Sistema de Financiera</Typography>
          <div >
            <IconButton >
              <PeopleAltOutlinedIcon /><span>{"Hola,"+sessionStorage.getItem('USER_FINANCIERA')}</span>
            </IconButton>  
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Box my={2}>
          <TransaccionRoute />
        </Box>
      </Container>
    </React.Fragment>
  );
}