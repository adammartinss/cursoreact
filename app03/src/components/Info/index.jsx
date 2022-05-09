import React from 'react';
import Globais from '../Globais';
export default function Info() {
    return (
        <>
           
            <p>{'nome: ' + Globais.nome}</p>
            <p>{'jogo: ' + Globais.jogo}</p>
            <p>{'ano: ' + Globais.ano}</p>
        </>
    );
}
