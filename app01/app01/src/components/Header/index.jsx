import React from 'react'
import Frank from '../../assets/img/focean.png'
import './style.css'
export default function header(){
    return(
        <header>
            <h1>Esse é o frank ocean</h1>
            <img src={Frank}/>
        </header>
    )
}
