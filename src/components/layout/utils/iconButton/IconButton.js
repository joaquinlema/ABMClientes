
import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const IconButtonUtils = (props) =>{

  return (
      <IconButton title={props.ICON_TITLE} onClick={props.ICON_ACCION}>
        {props.ICON_BUTTON} 
      </IconButton>

  );
}
export default IconButtonUtils