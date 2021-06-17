import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../public/images/logo.png'
import { grey } from '@material-ui/core/colors';
import { Redirect } from 'react-router-dom';

// styling
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(9),
    },
    title: {
      flexGrow: 1,
    },
    text: {
      color: 'white',
      textDecoration: 'none',
      '&:visited': {
        color: 'white',
      },
      '&:hover': {
        color: '#CCCCCC',
      },
    },
    bar: {
      backgroundColor: grey[900], // bar color
    },
    link: {
      textDecoration: 'none',
      color: 'black',
    }
  }));

// function
export default function NavBar() {
    const classes = useStyles()

    // is logged in
    const [auth, setAuth] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
      setAuth(event.target.checked);
    }

    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const func = ( () => {
      window.location.reload(true);
    })


    return (
      <div className={classes.root}>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup>
        <AppBar position="static" className={classes.bar}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>   
              <Link className={classes.text} to={"./"}>HOME</Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>   
              <Link className={classes.text} to={"./planets"}>PLANETS</Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link className={classes.text} to={"./spaceships"}>SPACESHIPS</Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link className={classes.text} to={"./order"}>FLIGHTS</Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link className={classes.text} to={"./about"}>ABOUT</Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link className={classes.text} to={"./login"}>LOG IN</Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link className={classes.text} to={"./signin"}>SIGN UP</Link>
            </Typography>

            {auth && (
              
              <div>
                
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={ handleMenu }
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link onClick={ func } className={classes.link} to={"./logout"} exact> Log out </Link>
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
}
