import React, {useState} from 'react'
import Classe from './components/Classe'
import Champ from './components/Champ'
import Globais from './components/Globais'
import Info from './components/Info'
  export default function App(){
    
    const[resumo, setResumo]=useState(Globais.resumo)
    const gravarResumo=()=>{
        Globais.resumo=resumo
    }
    const verResumo=()=>{
        alert(Globais.resumo)
    }
    return(
        <>
            <h1>Componentes de Classe</h1>
            <Classe instagram='zangadam_' curso='curso de React'/>
            <Champ fator={1}/>
            <p>{'nome: '+ Globais.nome}</p>
            <p>{'jogo: '+ Globais.jogo}</p>
            <p>{'ano: '+ Globais.ano}</p>
            <hr />
            <input type="text" value={resumo}onChange={(e)=>setResumo(e.target.value)}/>
            <button onClick={()=>gravarResumo()}>Gravar resumo</button>
            <button onClick={()=>verResumo()}>Ver Resumo</button>
        </> 
      )
  }
