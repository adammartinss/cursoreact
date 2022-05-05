import React, { useState, useEffect } from 'react';
import Listas from './components/Listas';
import Forms from './components/Forms';
import Form from './components/Forms';
import Select from './components/Select';
import Nota from './components/Nota';
import Resultado from './components/Resultado';
import Caixa from './components/Caixa';
import Adam from './components/Adam';
import Ls from './components/Ls'
export default function App() {
    useEffect(() => {
        document.title= 'Status: ' ;
    });
    // const[nota1, setNota1]=useState('')
    // const[nota2, setNota2]=useState('')
    // const[nota3, setNota3]=useState('')
    // const[nota4, setNota4]=useState('')
    const [log, setLog] = useState(false);
    const [notas, setNotas] = useState({
        nota1: '0',
        nota2: '0',
        nota3: '0',
        nota4: '0',
    });
    const handleSetNotas = (e) => {
        if (e.target.getAttribute('name') == 'nota1') {
            setNotas({
                nota1: e.target.value,
                nota2: notas.nota2,
                nota3: notas.nota3,
                nota4: notas.nota4,
            });
        } else if (e.target.getAttribute('name') == 'nota2') {
            setNotas({
                nota1: notas.nota1,
                nota2: e.target.value,
                nota3: notas.nota3,
                nota4: notas.nota4,
            });
        } else if (e.target.getAttribute('name') == 'nota3') {
            setNotas({
                nota1: notas.nota1,
                nota2: notas.nota2,
                nota3: e.target.value,
                nota4: notas.nota4,
            });
        } else if (e.target.getAttribute('name') == 'nota4') {
            setNotas({
                nota1: notas.nota1,
                nota2: notas.nota2,
                nota3: notas.nota3,
                nota4: e.target.value,
            });
        }
    };
    const msglogin = () => {
        return 'Usuário Logado';
    };
    const msglogoff = () => {
        return 'Favor Logar';
    };
    const cumprimento = () => {
        const hora = new Date().getHours();
        if (hora >= 0 && hora < 13) {
            return <p>Bom Dia</p>;
        } else if (hora >= 13 && hora < 18) {
            return <p>Boa Tarde</p>;
        } else {
            return <p>Boa Noite</p>;
        }
    };
    return (
        <>
            {cumprimento()}
            <p>{log ? msglogin() : msglogoff()}</p>
            <button onClick={() => setLog(!log)}>
                {log ? 'Logoff' : 'Login'}
            </button>
            <Listas />
            <Forms />
            <Select />
            <Nota
                num={1}
                nome={'nota1'}
                nota={notas.nota1}
                setNota={handleSetNotas}
            />
            <Nota
                num={2}
                nome={'nota2'}
                nota={notas.nota2}
                setNota={handleSetNotas}
            />
            <Nota
                num={3}
                nome={'nota3'}
                nota={notas.nota3}
                setNota={handleSetNotas}
            />
            <Nota
                num={4}
                nome={'nota4'}
                nota={notas.nota4}
                setNota={handleSetNotas}
            />

            <Resultado
                somaNotas={
                    parseFloat(notas.nota1) +
                    parseFloat(notas.nota2) +
                    parseFloat(notas.nota3) +
                    parseFloat(notas.nota4)
                }
            />
            <Caixa site="www.adamrobo.com.br">
                <Adam />
                <h1>Adam Robô</h1>
                <p>O amigo da visão</p>
                <hr />
            </Caixa>
            <Ls/>
        </>
    );
}
