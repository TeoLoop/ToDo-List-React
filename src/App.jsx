import { useState } from 'react'
import './App.css'
import { AppForm } from './components/AppForm'
import { AppTask } from './components/AppTask'

function App() {
  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([])

  const handleChange = (e) => {
    setTarea(e.target.value)
  }

  const addTask = (e) => {
    e.preventDefault();
    if (tarea.trim() === '') {
      alert('Debes agregar algo')
      return
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea,
      completada: false
    }

    const totalTareas = [nuevaTarea, ...tareas]
    setTareas(totalTareas)
    setTarea('')

  }

const borrarTarea = (id) => {
  const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
  setTareas(tareasActualizadas);
};


  return (
    <>
      <h2>To-Do List</h2>
      <AppForm
        handleChange={handleChange}
        addTask={addTask}
        tarea={tarea}
      />

      {tareas.length>1&&(
        <button className='eliminar' onClick={()=>setTareas([])}>Vaciar Tareas</button>
      )}

      {tareas.map(tarea => (
        <AppTask
          key={tarea.id}
          id={tarea.id}
          tarea={tarea}
          borrarTarea={borrarTarea}
        />
      ))}

    </>
  )
}

export default App
