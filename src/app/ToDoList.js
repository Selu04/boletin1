'use client'
import { useState } from "react";

export default function ToDoList() {
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);
    
    function addTarea() {
        if (tarea.trim() !== '') {
            setTareas([...tareas, { texto: tarea, completada: false }]); 
            setTarea(''); 
        }
    }
    function completeTarea(index) {
        setTareas(tareas.map((t, i) =>
            i === index ? { ...t, completada: !t.completada } : t 
        ));
    }
    function deleteTarea(index) {
        setTareas(tareas.filter((_, i) => i !== index));
    }

    return (
        <div>
            <input 
                value={tarea} 
                onChange={e => setTarea(e.target.value)} 
                placeholder="Escribe una tarea" 
            />
            <br />
            <button onClick={addTarea}>Añadir Tarea</button>
            {tareas.map((listTarea, index) => 
                <div key={index}>
                   
                    <p style={{ textDecoration: listTarea.completada ? 'line-through' : 'none' }}>
                        {listTarea.texto}
                    </p>
                    <button onClick={() => completeTarea(index)}>Completar</button>
                    <button onClick={() => deleteTarea(index)}>Eliminar</button>
                </div>
            )}
        </div>
    );
}
