import React from 'react';

export default class Classe extends React.Component {
    constructor(props) {
        super(props); /*cmnd que chama o construtor da classe pai no caso o construtor de Component*/
    }
    render() {
        return (
            <div>
                <h1>Primeiro Componente de Classe</h1>
                <p>instagram: {this.props.instagram}</p>
                <p>Curso: {this.props.curso}</p>
                {/* componente de classe usa o o this diferente do componente de funcao props é referenciado dentro do construtor */}
            </div>
        );
    }
}
