import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import Tooltip from '@material-ui/core/Tooltip';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({    
  root: {
      width: '100%',
    },
    actions:{
        width: '122px',
        height: '24px',
        left: '0px',
        top: '-4px',
        fontFamily: 'Titillium Web',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '22px',
        lineHeight: '24px',
        letterSpacing: '0.18px',
        color: '#002563', 
    },
    spacer:{
        marginLeft:'950px'
    },
    searchIcon:{
        position: 'absolute',
        left: '12.5%',
        right: '14.63%',
        top: '12.5%',
        bottom: '14.63%',
        height: '17.489999771118164px',
        width: '17.489999771118164px',
        borderRadius: '0px',
        marginLeft:'950px'
    }

  }));

 const  ToolbarUtil = (props) => {
     const classes = useStyles();

    return (
        <Toolbar >
        <div className={classes.title}>
            <Typography variant="h6">
              Listado total
            </Typography>
        </div>
        <div  />
        <div className={classes.spacer}>
              <IconButton aria-label="Filter list" >
                <SearchIcon/>
              </IconButton>
        </div>
      </Toolbar>
    )
}
export default ToolbarUtil;


  