import React, { useState } from 'react'

export const FuncionalComponentCounter = () => {

    const [Counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(Counter + 1)
    }

    return (
        <>

            <h1 className="my-4">FunctionalComponent</h1>
            <pre>Contador : {Counter}</pre>

            <button onClick={increment}> incremnet </button>

        </>
    )
}
