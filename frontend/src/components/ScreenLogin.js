import React, { useState } from 'react'
import { Button, Card, CardActions, CardContent } from '@material-ui/core'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import { grey, lightBlue } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import Grid from '@material-ui/core/Grid'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { FormHelperText, Typography } from '@material-ui/core'

const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: lightBlue
    }
});

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
    signin: {
        paddingTop: 50,
    },
    text: {
        marginBottom: 70,
        marginTop: 70,
    },
})

const defaultValues = {
    username: "",
    password: ""
};


const ScreenLogin = () => {

    const classes = useStyles()

    var csrftoken = getCookie('csrftoken')

    const [formValues, setFormValues] = useState(defaultValues);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };


    return (
        <>
        <ThemeProvider theme={darkTheme}>
        
        <Typography
          className={ classes.text }
          align="center"
          variant="h3"
          >
          Enter the space
        </Typography>

        <form method="post" action = "/">
        <input type="hidden" name="csrfmiddlewaretoken" value={ csrftoken } />

            <Grid container 
                spacing={5}
                alignItems="center"
                justify="center"
                direction="column">

                <Grid item>
                    <TextField
                    size="small"
                    name="input-login"
                    label="Username"
                    variant="outlined"
                    type="text"
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                        ),
                    }}
                    />
                </Grid>
                <Grid item>
                    <TextField
                    size="small"
                    name="input-password"
                    label="Password"
                    variant="outlined"
                    type="text"
                    />
                </Grid>

                <Grid item xs={12}>
                    {/* <input name="submit-login" className={classes.input} type="submit" /> */}

                    <Button
                        name="submit-login"
                        variant="contained"
                        color="primary"
                        type="submit">
                            Submit
                    </Button>
                </Grid>
           

        </Grid>
        </form>
        </ThemeProvider>
        </>
    )
}

export default ScreenLogin
