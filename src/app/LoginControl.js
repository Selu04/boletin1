'use client';
import { useState } from "react";

export default function LoginControl(){
    const [log, setLog] = useState(false);

    function changeState() {
        setLog(prevLog => !prevLog);
    }
    return(
        <div>
            <button onClick={changeState}>{log ? 'Cerrar Sesion' : 'Iniciar Sesion'}</button>
        </div>
    );
}