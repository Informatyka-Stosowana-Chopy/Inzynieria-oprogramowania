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


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
      },
    panel: {
        padding: '10px',
        border: '2px solid gold',
        justifyContent: "center",
        height: "70vh",
    },
})

const defaultInfo = {
  name: "Planet",
  orbitalPeriod: 0,
  material: "Rocks",
  density: -2,
  population: -1,
  radius: -3,
  temperature: -4,
};

const ScreenPlanets = () => {

    // JSON
    const [showAddPlanet, setShowAddPlanet] = useState(false)
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        const getPlanets = async () => {
        const planetsFromServer = await fetchPlanets()
        setPlanets( planetsFromServer )
      }
      getPlanets()
      }, [])

    // Fetch Planets
    const fetchPlanets = async () => {
    const res = await fetch('http://localhost:5000/planets')
    const data = await res.json()

    return data
  }

  // Fetch Planet
  const fetchPlanet = async (id) => {
    const res = await fetch(`http://localhost:5000/planets/${id}`)
    const data = await res.json()

    return data
  }

  // Add Planet
  const addPlanet = async (planet) => {
    const res = await fetch('http://localhost:5000/planets', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify( planet )
    })

    const data = await res.json()

    setPlanets([ ...planets, data ])
  }

  // Delete Planet
  const deletePlanet = async (id) => {
    const res = await fetch(`http://localhost:5000/planets/${id}`, {
      method: 'DELETE',
    })
    res.status === 200
      ? setPlanets( planets.filter((planet) =>
      planet.id !== id))
      : alert('Error while deleting planet')
  }






    const classes = useStyles()

    const [planetInfo, setPlanetInfo] = useState( defaultInfo )

    return (
        <>
          <Router>
            <div className="container">
              <Header
                onAdd={() => setShowAddPlanet(!showAddPlanet)}
                showAdd={ showAddPlanet }
              />
              <Route
                path='/planets'
                exact
                render={( props ) => (
                  <>
                    {showAddPlanet && <AddPlanet onAdd={ addPlanet } />}
                    { planets.length > 0 ? (
                      <Planets
                        planets={ planets }
                        onDelete={ deletePlanet }
                      />
                    ) : (
                      'No planets available'
                    )}
                    </>
                )}
              />
            </div>
          </Router>




          {/* <Grid container justify="center" className={ classes.root }>
              <Grid item xs={3} className={classes.panel} align="right">  


              </Grid>
              <Grid item xs={6} className={classes.panel}>

                <Canvas>
                  <OrbitControls />
                  <ambientLight intensity={0.6} />
                  <directionalLight intensity={0.6} />
                  <Suspense fallback={null}>
                    <Model/>
                    
                  </Suspense>
                </Canvas>

              </Grid>
              <Grid item xs={3} className={classes.panel}>


              </Grid>
            </Grid> */}

          
        </>
    )
}

export default ScreenPlanets
