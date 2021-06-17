import React from "react"
import { render } from "react-dom"
import Button from "@material-ui/core/Button"
import { AppBar, Toolbar } from "@material-ui/core"
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import ScreenPlanet from './ScreenPlanets'
import ScreenMain from './ScreenMain'
import ScreenLogin from './ScreenLogin'
import LoadingScreen from './LoadingScreen'
import ScreenSpaceships from './ScreenSpaceships'
import Api from './Api'
import { makeStyles, withTheme } from '@material-ui/core/styles';

import img from '../../public/images/img.jpg'
import NavBar from './NavBar'
import SignInScreen from "./SignInScreen";
import Mediator from "./Mediator";


export default function App() {

    return (
      

        <div className='main'>

          <Mediator />

          <LoadingScreen />
          <Api />

          { <BrowserRouter>
            <NavBar />
            <Switch>

              <Route path="/" exact>
                HOME DEBUG
                <ScreenMain />
              </Route>

              <Route path="/planets" exact>
                PLANETS DEBUG
                <ScreenPlanet />
              </Route>

              <Route path="/spaceships" exact>
                SPACESHIPS DEBUG
                <ScreenSpaceships />
              </Route>

              <Route path="/order" exact>FLIGHTS DEBUG</Route>

              <Route path="/profile" exact>YOUR PROFILE DEBUG</Route>
              
              <Route path="/about" exact>ABOUT DEBUG</Route>
              
              <Route path="/login" exact>
                ZALOGUJ SIĘ DEBUG
                <ScreenLogin />
              </Route>

              <Route path="/signin" exact>
                <SignInScreen />
                SIGN IN
              </Route>

            </Switch>
          </BrowserRouter> }
          

          
        </div>
    )
}

const appDiv = document.getElementById("app")
render (<App />, appDiv)
