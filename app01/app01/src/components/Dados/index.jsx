import React from 'react'

export default function Dados(props){
    return(
        <section>
            <p>Instagram: {props.ig}</p>
            <p>Email: {props.email}</p>
            <p>Curso: {props.curso}</p>
        </section>
    )
}
