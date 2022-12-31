import React, { useState } from 'react';

function Counter() {
    const [cart, setCart] = useState({
        item: 'apple', 
        quantity: 0});

        function removeApple() {
//  1. use a callback to get the previous value
//   2. spread out all the properties of the prev state
//    3. only change the property that you need to change
            setCart(prevCart => ({
                ...prevCart,
                quantity:prevCart.quantity - 1,
            }))
        }

        function addApple() {
            setCart(prevCart => ({
                ...prevCart,
                quantity:prevCart.quantity + 1,
            }))
        }

    return (
        <div>
            <button onClick={removeApple}>-</button>
            {cart.quantity}
            {cart.item}
            <button onClick={addApple}>+</button>
        </div>
    )
}

export default Counter


// we are shopping and we had a cart

// are quantity of the cart is 0 

// but we wanted to buy 2 apples