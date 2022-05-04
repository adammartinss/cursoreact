import React from 'react'
import './style.css'
import Dados from '../Dados'
function aluno(){
    return(
        <p>Adam Martins Santos</p>
    )
}
export default function Corpo(){
     const ig=()=>{
         return 'ootaahldoadamdohg';
     }
     const email = 'adammartinssantos@hotmail.com';
     const crs = 'react.js';
     const somar=(v1,v2)=>{
         return v1+v2
     }
    return (
        <section>
            <h1>Curso De React</h1>
            <h2>{aluno()}</h2>
            <p>Organizando componentes</p>
            <Dados ig={ig} email={email} curso={crs} 
            somar={somar}/>
        </section>
    );
}
