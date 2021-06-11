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
import { FormHelperText } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';


const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: lightBlue
    }
});

const useStyles = makeStyles((theme) => ({
    signin: {
        //backgroundColor: lightBlue[900],
        paddingTop: 50,
    },
}));

const defaultValues = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    sex: "",
    mail: "",
    birthdate: "",
    pesel: "",
    homeplanet: "earth",
};

const SignInScreen = () => {

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

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

    return (

        <div className={ classes.signin }>

        <ThemeProvider theme={darkTheme}>

        <form onSubmit={handleSubmit}>
        <Grid container 
            spacing={5}
            alignItems="center"
            justify="center"
            direction="column">
          <Grid item>
            <TextField
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
              id="username-input"
              name="firstname"
              label="First name"
              variant="outlined"
              type="text"
              value={formValues.firstname}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="lastname-input"
              name="lastname"
              label="Last name"
              variant="outlined"
              type="text"
              value={formValues.lastname}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="password-input"
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              value={formValues.password}
              onChange={handleInputChange}
            />
          </Grid>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                name="birthdate"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Your birthdate"
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
                name="homeplanet"
                value={formValues.homeplanet}
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
                id="mail-input"
                name="mail"
                label="Mail"
                variant="outlined"
                type="text"
                value={formValues.mail}
                onChange={handleInputChange}
              />
          </Grid>
          <Grid item>
            <TextField
                id="pesel-input"
                name="pesel"
                label="Pesel"
                variant="outlined"
                type="number"
                value={formValues.pesel}
                onChange={handleInputChange}
              />
          </Grid>

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </form>

      </ThemeProvider>
      </div>
    );
        
    
}

export default SignInScreen
