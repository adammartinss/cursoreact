import React, { useState } from 'react';
import JayceImg from '../assets/JayceSquare.webp';
import GpImg from '../assets/GangplankSquare.webp';
import RivenImg from '../assets/RivenSquare.webp';
import IreliaImg from '../assets/IreliaSquare.webp';

export default function champSelect() {
    const [champ, setChamp] = useState('');
    const imgs = {
        GangPlank: GpImg,
        Irelia: IreliaImg,
        Riven: RivenImg,
        Jayce: JayceImg,
    };
    return (
        <>
            <label>Escolha um Campeão</label>
            <select value={champ} onChange={(e) => setChamp(e.target.value)}>
                <option value="" defaultValue>
                    Selecione o campeão
                </option>
                <option value="GangPlank">GangPlank</option>
                <option value="Irelia">Irelia</option>
                <option value="Riven">Riven</option>
                <option value="Jayce">Jayce</option>
            </select>
            {champ && (
                <p>
                    Campeao selecionado: {champ} <img src={imgs[champ]} />
                </p>
            )}
        </>
    );
}
