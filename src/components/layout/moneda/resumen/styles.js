
import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({

    root:{
        backgroundColor: '#002563',
        boxShadow: '0px 5px 10px rgba(0, 37, 99, 0.05)',
        borderRadius: '12px',
    },
    labelResumen:{
        fontFamily: 'Titillium Web',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        color: '#7B8FFD',
        marginLeft: '24px',
        marginTop:'20px'
    },
    text:{
        fontFamily: 'Titillium Web',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        color: '#FFFFFF',
        marginLeft: '24px'
    },
    grid:{
        marginTop:'20px'
    },
   
        divider:{
            width: '80%', 
            left: '24px',
            right: '40px',
            border:'1px solid',
            color:'#BFC8E0',
            transform:'rotate(180deg)',
            marginLeft: '20px',
            marginBottom:'20px'
           },
     number:{
        fontFamily: 'Titillium Web',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '34px',
        color: '#3EBC94',
        marginBottom:'10px',
        marginTop: '10px',
        marginLeft: '24px'
     }
}))