import React, { Component } from 'react';

export default class Padre extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = e => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  render() {
    return (
      <>
        <h2>Comunicacion entre componentes</h2>
        <p>
          <b>{this.state.contador}</b>
        </p>
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="mensaje para hijo 1"
        ></Hijo>
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="mensaje para hijo 2"
        ></Hijo>
      </>
    );
  }
}
/*
Cuando tenemos la necesidad de que un componente hijo
mande datos a su padre los podemos hacer a traves de los 
eventos,simplemente pasamos una función como prop del 
componente padre al componente hijo, y éste ejecutará 
la función .
*/
function Hijo(props) {
  return (
    <>
      <h3>{props.mensaje}</h3>
      <button onClick={props.incrementarContador}>+</button>
    </>
  );
}
