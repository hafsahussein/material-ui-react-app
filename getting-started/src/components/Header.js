import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import { AppBar,Toolbar,Grid } from '@material-ui/core';
const useStyles =makeStyles({
    appBar:{
        paddingLeft:320
    }
})
const Header = () => {
    const classes = useStyles()
    return ( 
            <AppBar position= "static" className ={classes.appBar}>
                <Toolbar>
                    <Grid container>
                        <Grid item></Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
     );
}
 
export default Header;