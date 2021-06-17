import Spaceship from './Spaceship'
import React from 'react'

const Spaceships = ({ spaceships, onDelete }) => {
    return (
        <>
            { spaceships.map((spaceship, index) => (
                <Spaceship
                    key={ index }
                    spaceship={ spaceship }
                    onDelete={ onDelete }
                />
            ))}
        </>
    )
}

export default Spaceships
