import React, { useState } from 'react'

const AddPlanet = ({ onAdd }) => {

    const [name, setName] = useState('')
    const [orbitalPeriod, setOrbitalPeriod] = useState(0)
    const [material, setMaterial] = useState('')
    const [density, setDensity] = useState(0)
    const [population, setPopulation] = useState(0)
    const [radius, setRadius] = useState(0)
    const [temperature, setTemperature] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please specify a planet')
            return
        }

        onAdd({ name, orbitalPeriod, material, density, population, radius, temperature })

        setName('')
        setOrbitalPeriod(0)
        setMaterial('')
        setDensity(0)
        setPopulation(0)
        setRadius(0)
        setTemperature(0)
    }
    
    return (
        <form className='add-form' onSubmit={ onSubmit }>
            <div className='form-control'>
                <label>Planet's name</label>
                <input
                    type='text'
                    placeholder='Add Planet'
                    value={ name }
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Orbital Period</label>
                <input
                    type='number'
                    placeholder='Set Orbital Period'
                    value={ orbitalPeriod }
                    onChange={(e) => setOrbitalPeriod(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Material</label>
                <input
                    type='text'
                    placeholder='Set Material'
                    value={ material }
                    onChange={(e) => setMaterial(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Density</label>
                <input
                    type='number'
                    placeholder='Set Density'
                    value={ density }
                    onChange={(e) => setDensity(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Population</label>
                <input
                    type='number'
                    placeholder='Set Population'
                    value={ population }
                    onChange={(e) => setPopulation(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Radius</label>
                <input
                    type='number'
                    placeholder='Set Radius'
                    value={ radius }
                    onChange={(e) => setRadius(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Temperature</label>
                <input
                    type='number'
                    placeholder='Set Temperature'
                    value={ temperature }
                    onChange={(e) => setTemperature(e.target.value)}
                />
            </div>

            <input type='submit' value='Add Planet' className='btn btn-block' />
        </form>
    )
}

export default AddPlanet
