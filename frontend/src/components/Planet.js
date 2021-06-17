import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
      margin: theme.spacing(8),
      backgroundColor: '#101010',
      color: 'white',
  },
}));

const Planet = ({ planet, onDelete }) => {

    const classes = useStyles()

    return (
        <>
            <div className={ classes.paper }>
                <div className='delete'>
                    <FaTrash style={{ color: 'red', cursor: 'pointer' }}
                        onClick={ () => onDelete( planet.id ) } />
                </div>

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

        </> 
    )
}

export default Planet
