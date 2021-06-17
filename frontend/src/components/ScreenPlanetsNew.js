import React, { Suspense, useState, useEffect } from 'react'
import Model from './Model'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import { Typography } from '@material-ui/core'
import Planets from './Planets'
import Planet from './Planet'
import AddPlanet from './AddPlanet'
import { BrowserRouter as Router, Route }
  from 'react-router-dom'
import Header from './Header'
import Button from './Button'

// import json here
import planets from "../../../database.json"



const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(8),
        backgroundColor: '#101010',
        color: 'white',
    },
  }));




const ScreenPlanetsNew = () => {

    const classes = useStyles()

    return (
        <div>
            { planets.planets.map(planet => {
              return (
                <div className={ classes.paper }>
                    

                    <Typography variant="h6">
                    Name: { planet.name }</Typography>
                    <Typography variant="h6">
                    Orbital Period: { planet.orbitalPeriod }</Typography>
                    <Typography variant="h6">
                    Material: { planet.material }</Typography>
                    <Typography variant="h6">
                    Density: { planet.density }</Typography>
                    <Typography variant="h6">
                    Population: { planet.population }</Typography>
                    <Typography variant="h6">
                    Radius: { planet.radius }</Typography>
                    <Typography variant="h6">
                    Temperature: { planet.temperature }</Typography>
                </div>
              )
            })
            }
    </div>
    )
}

export default ScreenPlanetsNew
