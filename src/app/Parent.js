'use client';
import { useState } from "react";

export default function Parent(){
    const [msj, setMsj] = useState("");

    function msjChange(msj){
        setMsj(msj)
    }
    
    return(
        <div>
            <Children msjPadre="Este es un mensaje de padre a Hijo" msjVuelta={msjChange}></Children>
            <h1>Este es el mensaje de vuelta: {msj}</h1>
        </div>
    );
    function Children({msjPadre, msjVuelta}){
        function msjDeVuelta(){
            msjVuelta("Este es un mensaje de hijo a padre");
        }
        return(
            <div>
                <button onClick={msjDeVuelta}>Devolver Mensaje</button>
            </div>
        );

    }
}