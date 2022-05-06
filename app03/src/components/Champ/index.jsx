import React, { useState } from 'react';

export default class Champ extends React.Component {
    constructor(props) {
        super(props);
        this.rota = 'TOPO';
        this.state = {
            status: true,
            contMorte: 0,
        };
        this.win=this.xingarJg.bind(this)
    }
    xingarJg() {
        // this.state.ligado = false
        // this.setState({ status: !this.state.status });
        this.setState(
            (state)=>(
                {status:!state.status}
        ));
    }
    morrer(){
        this.setState(
            (state,props)=>(
                {contMorte: state.contMorte + props.fator}
            )
        )
    }
    render() {
        return (
            <div>
                <h1>Minha Rota</h1>
                <p>Rota: {this.rota}</p>
                <p>Status: {this.state.status ? 'Da pra ganhar' : 'FF 15'}</p>
                <p>Mortes: {this.state.contMorte}</p>
                <button onClick={() => this.win()}>
                    {this.state.status ? 'Xingar mae do JG' : 'Adc sabe clicar'}
                </button>
                <button onClick={()=>this.morrer()}>Morrer</button>
            </div>
        );
    }
}
