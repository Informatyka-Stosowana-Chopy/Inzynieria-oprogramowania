import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { FormHelperText, Typography } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import { useForm } from 'react-hook-form'


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

const useStyles = makeStyles((theme) => ({
    signin: {
        //backgroundColor: lightBlue[900],
        paddingTop: 50,
    },
    text: {
      marginBottom: 70,
      marginTop: 70,
    },
}));

const defaultValues = {
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    password2: "",
    sex: "",
    email: "",
    birth_date: "",
    user_pesel: "",
    home_planet: "earth",
};


const SignInScreen = () => {

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    var csrftoken = getCookie('csrftoken')

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const [formValues, setFormValues] = useState(defaultValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
      });
    };
    const handleSliderChange = (name) => (e, value) => {
        setFormValues({
        ...formValues,
        [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };

    const classes = useStyles()

    const { register, handlesubmit } = useForm()

    return (

        <div className={ classes.signin }>

        <ThemeProvider theme={darkTheme}>

        <Typography
          className={ classes.text }
          align="center"
          variant="h3"
          >
          Create an account
        </Typography>

        {/* <form onSubmit={handleSubmit} method="post" action="/"> */}
        <form method="post" action="/signup">
        <input type="hidden" name="csrfmiddlewaretoken" value={ csrftoken } />
        <Grid container 
            spacing={5}
            alignItems="center"
            justify="center"
            direction="column">
          <Grid item>
            <TextField
              size="small"
              id="name-input"
              name="username"
              label="Pseudonim"
              variant="outlined"
              type="text"
              value={formValues.username}
              onChange={handleInputChange}
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
              id="username-input"
              name="first_name"
              label="First name"
              variant="outlined"
              type="text"
              value={formValues.first_name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              size="small"
              id="last_name-input"
              name="last_name"
              label="Last name"
              variant="outlined"
              type="text"
              value={formValues.last_name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              size="small"
              id="password-input"
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              value={formValues.password}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              size="small"
              id="repeatPassword-input"
              name="password2"
              label="Confirm"
              variant="outlined"
              type="password"
              value={formValues.repeatPassword}
              onChange={handleInputChange}
            />
          </Grid>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                name="birth_date"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Your birth_date"
                value={ selectedDate }
                onChange={ handleDateChange }
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <Grid item>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                name="sex"
                value={formValues.sex}
                onChange={handleInputChange}
                row
              >
                <FormControlLabel
                  key="male"
                  value="male"
                  control={<Radio size="small" />}
                  label="Male"
                />
                <FormControlLabel
                  key="female"
                  value="female"
                  control={<Radio size="small" />}
                  label="Female"
                />
                <FormControlLabel
                  key="other"
                  value="other"
                  control={<Radio size="small" />}
                  label="Other"
                />
              </RadioGroup>
              
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <Select
                name="home_planet"
                value={formValues.home_planet}
                onChange={handleInputChange}
              >
                <MenuItem key="Earth" value="earth">
                  Earth
                </MenuItem>
                <MenuItem key="Mars" value="mars">
                  Mars
                </MenuItem>
                <MenuItem key="Jupiter" value="jupiter">
                  Jupiter
                </MenuItem>
                <MenuItem key="Other" value="other">
                  Other
                </MenuItem>
              </Select>
              <FormHelperText>Your home planet</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item>
            <TextField
                id="email-input"
                name="email"
                label="email"
                variant="outlined"
                type="text"
                value={formValues.email}
                onChange={handleInputChange}
              />
          </Grid>
          <Grid item>
            <TextField
                id="user_pesel-input"
                name="user_pesel"
                label="user_pesel"
                variant="outlined"
                type="number"
                value={formValues.user_pesel}
                onChange={handleInputChange}
              />
          </Grid>
          <Button
            name="submit-signin"
            variant="contained"
            color="primary"
            type="submit"

            >
            Submit
          </Button>s
        </Grid>
      </form>

      </ThemeProvider>
      </div>
    );
        
    
}

export default SignInScreen
