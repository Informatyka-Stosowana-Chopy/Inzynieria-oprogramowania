
import React from 'react'
import Model from './Model'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
      },
    panel: {
        backgroundColor: "grey",
        padding: '10px',
        border: '2px solid blue',
        justifyContent: "center",
        height: "70vh",
    },
})

const ScreenPlanets = () => {

    const classes = useStyles()

    return (
        <>
          <Grid container justify="center" className={ classes.root }>
              <Grid container xs={3} className={classes.panel}>
                
              </Grid>
              <Grid container xs={6} className={classes.panel}>
                <Model />
              </Grid>
              <Grid container xs={3} className={classes.panel}>

              </Grid>
          </Grid>

          
        </>
    )
}

export default ScreenPlanets
