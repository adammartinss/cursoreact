import React, { useState } from 'react'

export default function Counter(){
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>count: {count}</h1>
            <buttonn onClick={() => setCount(count + 1)}>+1</buttonn>
        </>
    );
}
