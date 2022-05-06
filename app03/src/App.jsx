import React from 'react'
import Classe from './components/Classe'
import Champ from './components/Champ'
import Bind from './components/Bind'
  export default function App(){
      
    return(
        <>
            <h1>Componentes de Classe</h1>
            <Classe instagram='zangadam_' curso='curso de React'/>
            <Champ fator={1}/>
        </> 
      )
  }
