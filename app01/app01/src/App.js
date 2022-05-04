import React from 'react'
import Header from './components/Header'
import Corpo from './components/Corpo'
import Counter from './components/Counter'
import Dados from './components/Dados'

export default  function App(){
   
    return(
        <>
        {/* cria essa tag vazia pois cada return pode exportar 1 componente*/}
            {/* <Header /> */}
            <Header/>
            <Corpo />
            <Counter />
        </>
    )
}

