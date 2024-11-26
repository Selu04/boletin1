'use client'
import { useState } from "react";

export default function Counter2(){
    const [count, setCount] = useState(0);

    function onMoreCount(){
        setCount(count + 1);
    }
    function onLessCount(){
        setCount(count - 1);
    }
    return(
        <div>
            <button onClick={onMoreCount}>Subir contador</button>
            <button onClick={onLessCount}>Bajar contador</button>
            <p>Contador actual: {count}</p>
        </div>
    );
}