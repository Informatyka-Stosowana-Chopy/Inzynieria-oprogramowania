import React from 'react'
import { Button, Card, CardActions, CardContent } from '@material-ui/core'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import { grey } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import Grid from '@material-ui/core/Grid'


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

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
    submit: {

    },
})

const ScreenLogin = () => {

    const classes = useStyles()

    var csrftoken = getCookie('csrftoken')

    return (
        <div>
            <h1>Zapraszamy do logowania</h1>

            
            <Card className={classes.card}>
                <Grid container>
                    <CardContent>
                        
                        <form method="post" action = "/">
                            
                        <input type="hidden" name="csrfmiddlewaretoken" value={ csrftoken } />
                            <Grid item xs={6}>
                                <input name="input-login" placeholder="login"
                                className={classes.input} type="text" />
                            </Grid>
                            <Grid item xs={6}>
                                <input name="input-password" placeholder="password"
                                className={classes.input} type="password" />
                            </Grid>
                            <Grid item xs={12}>
                                <input name="submit-login" className={classes.input} type="submit" />
                            </Grid>
                        </form>
                        
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
