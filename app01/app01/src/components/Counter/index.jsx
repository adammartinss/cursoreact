import React,{ useState } from 'react'
import './style.css'

export default function Counter(){
    const [count, setCount] = useState(0)
    return (
        <>
            <div className='container'>
                <h1>count: {count}</h1>
                <button onClick={() => setCount(count + 1)}>+1</button>
            </div>
        </>
    );
}
