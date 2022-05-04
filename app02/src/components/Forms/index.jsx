import React,{useState} from'react'

export default function Form(){

    const[nome, setNome]=useState('')
    const handleChangeNome=(e)=>{
        setNome(e.target.value)
    }

    return(
        <>
            <input 
            type="text" 
            name="fnome" placeholder='Digite Seu Nome'
            value={nome}
            onChange={(e)=>handleChangeNome(e)}
            />
            <p>Nome digitado: {nome}</p>
        </>
    )
}
