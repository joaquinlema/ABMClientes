import React from 'react'
import Switch from '@material-ui/core/Switch';

export default function SwichtUtils(props) {
    return (
        <>
            <Switch
                checked={props.CHEKED}
                onChange={props.ONCHANGE}
                name="checkedB"
                color="primary"
            />
        </>
    )
}
