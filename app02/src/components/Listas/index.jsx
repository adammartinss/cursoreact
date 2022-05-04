import React from 'react'

export default function Lista(){
    const champ = ['GangPlank','Irelia', 'Jayce', 'Riven', 'Jinx','Teemo', 'Annie']
    
    const listaChamp = champ.map(
        (c,i)=>
             <li key={i}>
                 {/* cria uma chave unica para cada li */}
                 {c}
                 </li>
    )
    
    return(
        <>
          <ul>{listaChamp}</ul>
        </>
    )
}
