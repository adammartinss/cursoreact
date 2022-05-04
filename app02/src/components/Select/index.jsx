import React,{useState} from 'react'

export default function champSelect(){
    const [champ, setChamp]=useState('')
    return (
        <>
            <label>Escolha um Campeão</label>
            <select value={champ} onChange={(e) => setChamp(e.target.value)}>
                <option value="GangPlank">GangPlank</option>
                <option value="Irelia">Irelia</option>
                <option value="Riven">Riven</option>
                <option value="Jayce">Jayce</option>
            </select>
            <p>Campeao selecionado: {champ}</p>
        </>
    );
}
