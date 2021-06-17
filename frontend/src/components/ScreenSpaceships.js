import Header from './Header'
import Button from './Button'
import Spaceships from './Spaceships'
import AddSpaceships from './AddSpaceships'
import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route }
  from 'react-router-dom'


const ScreenSpaceships = () => {

  const [showAddSpaceship, setShowAddSpaceship] = useState(false)
  const [spaceships, setSpaceships] = useState([])

  useEffect(() => {
    const getSpaceships = async () => {
      const spaceshipsFromServer = await fetchSpaceships()
      setSpaceships( spaceshipsFromServer )
    }

    getSpaceships()
  }, [])

  // Fetch Spaceships
  const fetchSpaceships = async () => {
    const res = await fetch('http://localhost:5000/spaceships')
    const data = await res.json()

    return data
  }

  // Fetch Spaceship
  const fetchSpaceship = async (id) => {
    const res = await fetch(`http://localhost:5000/spaceships/${id}`)
    const data = await res.json()

    return data
  }

  // Add Spaceship
  const addSpaceship = async (spaceship) => {
    const res = await fetch('http://localhost:5000/spaceships', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify( spaceship )
    })

    const data = await res.json()

    setSpaceships([ ...spaceships, data ])
  }

  // Delete Spaceship
  const deleteSpaceship = async (id) => {
    const res = await fetch(`http://localhost:5000/spaceships/${id}`, {
      method: 'DELETE',
    })
    res.status === 200
      ? setSpaceships( spaceships.filter((spaceship) =>
      spaceship.id !== id))
      : alert('Error while deleting spaceship')
  }

    return (
        <Router>
            <div className="container">
                <Header
                    title={ 'SPACESHIPS' }
                    onAdd={() => setShowAddSpaceship(!showAddSpaceship)}
                    showAdd={ showAddSpaceship }
                />
                <Route
                path='/spaceships'
                exact
                render={( props ) => (
                    <>
                    {showAddSpaceship && <AddSpaceships onAdd={ addSpaceship } />}
                    { spaceships.length > 0 ? (
                        <Spaceships
                        spaceships={ spaceships }
                        onDelete={ deleteSpaceship }
                        />
                    ) : (
                        'No spaceships available'
                    )}
                    </>
                )}
                />
            </div>
        </Router>
    )
}

export default ScreenSpaceships
