import React, { useState, useEffect } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);

    
    function handleCounter() {
        setCounter(counter + 1);
    }

    useEffect(() => {
        console.log('Mounted')

        return () => {
            console.log('Unmounted')
        }
    }, []);

    useEffect(() => {
        console.log('Updated');
    });

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleCounter}>Incrementar</button>
        </div>
    )
}
