import React, { useState } from 'react'

const AddSpaceships = ({ onAdd }) => {
	
    const [name, setName] = useState('')
    const [power, setPower] = useState(0)
    const [hyperspace, setHyperspace] = useState(false)
    const [year, setYear] = useState(0)
    const [capacity, setCapacity] = useState(0)
    const [_class, setClass] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please add a spaceship')
            return
        }

        onAdd({ name, power, hyperspace, year, capacity, _class})

        setName('')
        setPower(0)
        setHyperspace(false)
        setYear(0)
        setCapacity(0)
        setClass('')

    }

    return (
        <form className='add-form' onSubmit={ onSubmit }>
            <div className='form-control'>
                <label>Spaceship's name</label>
                <input
                    type='text'
                    placeholder='Add Spaceship'
                    value={ name }
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Power</label>
                <input
                    type='number'
                    placeholder='Add Power'
                    value={ power }
                    onChange={(e) => setPower(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Hyperspace</label>
                <input
                    type='checkbox'
                    placeholder='Set Hyperspace'
                    value={ hyperspace }
                    onChange={(e) => setHyperspace(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Year</label>
                <input
                    type='number'
                    placeholder='Add Year'
                    value={ year }
                    onChange={(e) => setYear(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Capacity</label>
                <input
                    type='number'
                    placeholder='Set Capacity'
                    value={ capacity }
                    onChange={(e) => setCapacity(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Class</label>
                <input
                    type='text'
                    placeholder='Set Class'
                    value={ _class }
                    onChange={(e) => setClass(e.target.value)}
                />
            </div>
            
            
            <input type='submit' value='Add Spaceship' className='btn btn-block' />
        </form>
    )
}

export default AddSpaceships
