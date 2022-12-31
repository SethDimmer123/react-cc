import React, { useState} from 'react';

function Counter() {
    const [Counter, setCounter] = useState(0)
    function incrementCounter() {
        setCounter(() => Counter + 1)

    }

    function decrementCounter() {
        setCounter(Counter - 1)
    }
    return(
        <div>
            <button onClick={decrementCounter}>-</button>
            {Counter}
            <button onClick={incrementCounter}>+</button>
        </div>
    )
}

export default Counter