import React, { useState } from 'react'
import '../AppTask.css'


export const AppTask = ({tarea, borrarTarea}) => {

    const [completada, setCompletada] = useState(false)

  return (
    <div className={completada?'containerTarea containerTareaCompletada':'containerTarea'}>
        <h2 className={completada?'completada':'noCompletada'}>{tarea.tarea}</h2>
        <button id='completar' onClick={()=> setCompletada(!completada)}>{completada?'No completada':'Completada'}</button>
        <button id='eliminar' onClick={()=> borrarTarea(tarea.id)}>Eliminar</button>
    </div>
  )
}



