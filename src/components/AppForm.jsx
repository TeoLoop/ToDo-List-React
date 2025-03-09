import React from 'react'

export const AppForm = ({ handleChange, addTask, tarea }) => {
    return (
        <div>
            <form onSubmit={addTask}>
                <input 
                type="text" 
                value={tarea} 
                placeholder='Ingresa la tarea...' 
                onChange={handleChange} />
                <button type="submit">Agregar</button>
            </form>
        </div>
    )
}
