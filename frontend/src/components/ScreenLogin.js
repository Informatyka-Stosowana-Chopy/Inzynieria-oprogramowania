import React from 'react'
import { Button, Card, CardActions, CardContent } from '@material-ui/core'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import { grey } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    input: {
        padding: 10,
        backgroundColor: "inherit",
        color: "white",
        borderColor: "black",
        borderWidth: 4,
        borderStyle: false,
    },
    card: {
        backgroundColor: grey[900],
        width: 500,
        alignItems: "center",
        alignSelf: "center",
    },
})

const ScreenLogin = () => {

    const classes = useStyles()

    return (
        <div>
            <h1>Zapraszamy do logowania</h1>

            
            <Card className={classes.card}>
                <Grid container>
                    <CardContent>
                        <Grid item xs={6}>
                            <input className={classes.input} type="text" />
                        </Grid>
                        <Grid item xs={6}>
                            <input className={classes.input} type="password" />
                        </Grid>

                        
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Grid>
            </Card>


            
            


            <Link to='/' exact> {/* exact causes warning */}
                <Button
                    id="btn"
                    variant="contained"
                    color="default">
                    LOG IN
                </Button>   
            </Link>

            
        </div>
    )
}

export default ScreenLogin
