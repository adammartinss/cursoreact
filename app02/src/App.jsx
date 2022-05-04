import React,{useState} from 'react'
import Listas from './components/Listas'
import Forms from './components/Forms'
import Form from './components/Forms'
import Select from './components/Select'
export default function App(){
    
    const[log,setLog]=useState(false)
    
    const msglogin=()=>{
        return 'Usuário Logado'
    }
    const msglogoff=()=>{
        return 'Favor Logar'
    }
    const cumprimento=()=>{
        const hora = new Date().getHours()
        if(hora>=0 && hora< 13){
            return <p>Bom Dia</p>
        }else if(hora >= 13 && hora <18){
            return <p>Boa Tarde</p>
        }else{
            return <p>Boa Noite</p>
        }
    }
    return(
        <>
            {cumprimento()}
            <p>
                {log?msglogin():msglogoff()}
            </p>
            <button onClick={()=>setLog(!log)}>{log?'Logoff':'Login'}</button>
            <Listas />
            <Forms/>
            <Select />
        </>
    )
    } 
