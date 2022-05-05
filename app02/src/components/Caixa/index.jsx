import React from 'react'
import Adam from '../Adam'
import './style.css'

export default function Caixa(props){
    return(
        <>
        {props.children}
        {/* {props.children[0]} para retornar um filho especifico no caso o primeiro sao guardados em array*/}
        <p>{props.site}</p>
        </>
    )
}
