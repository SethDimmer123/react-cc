import React, { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0)
    function incrementCounter() {
        setCounter((prevcounter) => prevcounter + 1)
        setCounter((prevcounter) => prevcounter + 1)

    }

    // if i just want to change its value if the value
    // depends on the previous value then i always
    // want to use a callback function

    function decrementCounter() {
        setCounter((prevcounter) => prevcounter -1)
        setCounter((prevcounter) => prevcounter -1)
    }

    return (
        <div>
            <button onClick={decrementCounter}>-</button>
            {counter}
            <button onClick={incrementCounter}>+</button>
        </div>
    )
}

export default Counter