import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';




const Planet = ({ planet, onDelete }) => {

    const classes = useStyles();

    return (
            <>
                <Paper
                    className={ classes.paper }
                    variant="outlined"
                    elevation={4}>
                        dupa blada
                        { planet.id }
                </Paper>
            </>

            // <div className='delete'>
            // <FaTrash style={{ color: 'red' }}
            //         onClick={ () => onDelete( planet.id ) } />
            // </div>

            //     <Typography variant="h6" align="center">
            //     Name: { planet.name }</Typography>

            //     <Typography variant="h6">
            //     Orbital Period: { planet.orbitalPeriod }</Typography>

            //     <Typography variant="h6">
            //     Material: { planet.material }</Typography>

            //     <Typography variant="h6">
            //     Density: { planet.density }</Typography>

            //     <Typography variant="h6">
            //     Population: { planet.population }</Typography>

            //     <Typography variant="h6">
            //     Radius: { planet.radius }</Typography>

            //     <Typography variant="h6">
            //     Temperature: { planet.temperature }</Typography>
    )
}

export default Planet
