import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styles from './styles';

const SelectUtils = (props) => {
    const classes = styles();
    return (
        <>
            <Autocomplete
                className={classes.selectUtils}
                options={props.OPTIONS_SELECT}
                onChange={props.ONCHANGE_SELECT}
                getOptionLabel={(option) => option[props.FILTER]}   
                value={props.VALUES}
                renderInput={(params) =>
                    <TextField {...params}
                        label={props.LABEL_SELECT}
                        variant="outlined"
                     
                        />
                    }
            />
        </>
    )
}
export default SelectUtils