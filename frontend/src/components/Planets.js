import React from 'react'
import Planet from './Planet'

const Planets = ({ planets, onDelete }) => {
    return (
        <>
            { planets.map((planet, index) => (
                <Planet
                    key={ index }
                    planet={ planet }
                    onDelete={ onDelete }
                />
            ))}
        </>
    )
}

export default Planets
