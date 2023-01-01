import React, { useState } from 'react';

function Counter() {
    const [arr, setArr] = useState([])

    return (
        <div>
            <button>-</button>
            <button>+</button>
        </div>
    );
}

export default Counter

