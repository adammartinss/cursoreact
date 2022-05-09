import React, {useState} from 'react';

const campeoes = [
    { categoria: 'Topo', preço: '6300', nome: 'Jayce' },
    { categoria: 'Meio', preço: '4800', nome: 'Yasuo' },
    { categoria: 'Topo', preço: '6300', nome: 'Sett' },
    { categoria: 'inferior', preço: '6300', nome: 'Xayah' },
    { categoria: 'inferior', preço: '6300', nome: 'Zeri' },
    { categoria: 'Meio', preço: '6300', nome: 'Vex' },
    { categoria: 'inferior', preço: '1350', nome: 'Janna' },
    { categoria: 'Selva', preço: '3150', nome: 'Xin zhao' },
    { categoria: 'Selva', preço: '3150', nome: 'Nidalee' },
];

const linhas = (cat) => {
    const li = [];
    campeoes.forEach((campeao) => {
        if (
            campeao.categoria.toUpperCase() == cat.toUpperCase() ||
            cat() == ''
        ) {
            li.push(
                <tr>
                    <td>{campeao.categoria}</td>
                    <td>{campeao.preço}</td>
                    <td>{campeao.nome}</td>
                </tr>
            );
        }
    });
    return li;
};
const TabelaCamp=(cat)=> {
    return (
        <table border="1" style={{ borderCollapse: 'collapse'}}>
            <thead>
                <tr>
                    <th>Rota</th>
                    <th>Preço</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>{linhas(cat)}</tbody>
        </table>
    );
};
// const pesquisaRota = (cat, sCat) => {
//     return (
//         <div>
//             <label> Digite uma rota</label>
//             <input
//                 type="text"
//                 value={cat}
//                 onChange={(e) => sCat(e.target.value)}
//             />
//         </div>
//     );
// };
export default function App() {
    let [categoria,setCategoria] = useState('');
    return (
        <>
            {/* {pesquisaRota(categoria, setCategoria)} */}
            <br />
            {TabelaCamp(categoria)}
        </>
    );
}
