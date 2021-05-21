import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    titulo: {
        fontFamily: 'Titillium Web',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '34px',
        lineHeight: '36px',
        color: '#5974FB',
        marginTop:'53px'
    }
}));

const HeaderPage = ({titulo, boton}) => {
    const classes = useStyles();

    return (
        <Fragment>
            <Grid item xs={9} sm={9} md={9} lg={9}>
                <span className={classes.titulo}>{titulo}</span>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} container justify="flex-end">
                {boton}
            </Grid>
        </Fragment>
    );
}

export default HeaderPage;
