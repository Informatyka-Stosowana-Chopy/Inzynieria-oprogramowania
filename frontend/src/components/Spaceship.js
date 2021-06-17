import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(8),
        backgroundColor: '#101010',
        color: 'white',
    },
  }));

const Spaceship = ({ spaceship, onDelete }) => {

    const classes = useStyles()

    return (
        <>
            <div className={ classes.paper }>
                <div className='delete'>
                    <FaTrash style={{ color: 'red', cursor: 'pointer' }}
                        onClick={ () => onDelete( spaceship.id ) } />
                </div>

                <Typography variant="h6">
                Name: { spaceship.name }</Typography>

                <Typography variant="h6">
                Power: { spaceship.power }</Typography>

                <Typography variant="h6">
                Hyperspace: { spaceship.hyperspace }</Typography>

                <Typography variant="h6">
                Production year: { spaceship.year }</Typography>

                <Typography variant="h6">
                Capacity: { spaceship.capacity }</Typography>

                <Typography variant="h6">
                Class: { spaceship.clasS }</Typography>

            </div>

        </> 
    )
}

export default Spaceship
