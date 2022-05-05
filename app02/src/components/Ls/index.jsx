import React, { useState } from 'react';
export default function Local() {
    const [nome, setNome] = useState();

    const armazenar = (chave, valor) => {
        localStorage.setItem(chave, valor);
    };
    const consultar = (chave) => {
        alert(localStorage.geItem(chave));
    };
    const apagar = (chave) => {
        localStorage.removeItem(chave);
    };
    // localStorage.setItem('nome', 'Adam')
    // localStorage.getItem('nome')
    // localStorage.removeItem('nome')

    return (
        <>
            <label>Digite um nome</label>
            <br />
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <br />
            <button onClick={() => armazenar('ls_nome', nome)}>
                Gravar Nome
            </button>
            <button onClick={() => consultar('ls_nome')}>Ver Nome</button>
            <button onClick={() => apagar('ls_nome')}>Remover Nome</button>
        </>
    );
}
