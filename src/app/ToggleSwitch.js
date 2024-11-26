'use client';
import { useState } from "react"

export default function ToggleSwitch(){
    const [state, setState] = useState("OFF");
    
    function ChangeState(){
        if(state == "OFF"){
            setState("ON")
        } else if (state == "ON"){
            setState("OFF")
        }
    }

    return(
        <div>
            <button onClick={ChangeState}>{state}</button>
        </div>
    )
}