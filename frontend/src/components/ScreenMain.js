import React from 'react'
import { Paper } from '@material-ui/core'
import img from '../../public/images/img.jpg'
import Grid from '@material-ui/core/Grid'
import Button from "@material-ui/core/Button"
import { makeStyles } from '@material-ui/core/styles';
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: 'center',
      fontSize: 30,
      backgroundColor: grey[900],
      color: grey[50],
      
    },
  }));
  

const ScreenMain = () => {
    const classes = useStyles();

    return (
        <div className='content'>
            <Grid container className={classes.root} spacing={10} >

              <Grid item xs={6} align="center">
                <img style={{ width: 400 }} src={img} />
                </Grid>
              
              <Grid item xs={6} align="center">
                <Paper className={classes.paper}>SPACE AWAITS</Paper>
                </Grid>
              
            </Grid>

            <h1>enter the space</h1>
            <Button
                id="btn"
                onClick={()=>alert('hello')}
                variant="contained"
                color="default">
                Hello Cosmos
            </Button>
        </div>
    )
}

export default ScreenMain
