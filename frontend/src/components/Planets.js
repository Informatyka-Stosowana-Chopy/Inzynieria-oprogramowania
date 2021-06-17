import React from 'react'
import Planet from './Planet'

const Planets = ({ planets, onDelete }) => {
    return (
        <div className="grid">
            { planets.map((planet, index) => (
                <Planet
                    key={ index }
                    planet={ planet }
                    onDelete={ onDelete }
                />
            ))}
        </div>
    )
}

export default Planets
