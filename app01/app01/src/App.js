import React from 'react'
import Header from './components/Header'
import Corpo from './components/Corpo'
import Counter from './components/Counter'
import Dados from './components/Dados'
import Relogio from './components/Relogio'
import './App.css'

export default  function App(){
   
    const textoDestaque={
        color:'#00f',
        fontSize: '3em'
        }

    return (
        <>
            {/* cria essa tag vazia pois cada return pode exportar 1 componente*/}
            {/* <Header /> */}
            <section className='caixa'>
                <h1 style={textoDestaque}>Adam Martins</h1>
                <Header />
                <Relogio />
                <Corpo />
                <Counter />
            </section>
        </>
    );
}

