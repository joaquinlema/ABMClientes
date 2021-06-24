import React from 'react';
import {Grid,Divider} from '@material-ui/core';
import ChipUtils from '../../../utils/chip/ChipUtils'
import Styles from './styles';

export default function CuentaCorriente({CHIP_LABEL,SALDO,POST}) {
    const classes = Styles();
    return (
        <>  
         <Grid item xs={12} md={12}>
             <ChipUtils label={CHIP_LABEL} class={"CuentaCorriente"}/>
            </Grid> 
        <Grid container className={classes.root}>
          
            <Grid item xs={12} md={12} className={classes.gridItem}>
                <label className={classes.label}>{"Saldo Actual : "}{SALDO}</label>
            </Grid> 
            <Grid item xs={12} md={12} className={classes.gridItem}>
                <Divider className={classes.divider}/>
            </Grid>
            <Grid item xs={12} md={12} className={classes.gridItem}>
                <label className={classes.labelPost}>{"Post transacción: "}{POST}</label>
            </Grid>
            <Grid item xs={12} md={12} className={classes.gridItem}/>       
        </Grid>
        </>
    )
}
