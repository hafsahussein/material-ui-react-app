import {withStyles} from '@material-ui/core/styles'
const styles =  {
    sideMenu:{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: 0,
        width: 320,
        height: '100%',
        backgroundColor: '#253053'
      
    }
}
const Sidemenu = (props) => {
    const {classes} = props;
    return ( 
        <div className={classes.sideMenu}>I am side menu</div>
     );
}
 
export default withStyles(styles)(Sidemenu);