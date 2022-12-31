import React, { useState } from 'react';

function Counter() {
const [cart, setCart] = useState({
    item:"apple",
    quantity:0,
});

function addApple() {
    setCart(prevCart => ({
        ...prevCart,
        quantity:1,
    }))
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

