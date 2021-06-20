import * as React from 'react'
import Chip from '@material-ui/core/Chip';
import styles from './style';
const ChipUtils = (props) =>{
const classes = styles();
    return(
        <Chip label={props.label} className={classes[props.class]} variant="outlined"/>
    )
}
export default ChipUtils;