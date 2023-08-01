import React, {Component} from "react";

function EstadoHijo(props){
  return(
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  );
}

export default class State extends  Component{
  constructor(props){
    super(props);
    this.state={
      contador:0,
    };
    // se comento el setInterval porque es una mala practica,
    // devido a que aun no llegamos a los hoots y muestra 
    // warning en consola 
    /*setInterval(() => {
      this.setState({
        contador: this.state.contador + 1
      })
    }, 1000);*/
  }
  render() {
    return(
      <div>
        <h2>El State</h2>
        <p>{this.state.contador}</p>
        <EstadoHijo contadorHijo={this.state.contador}/>
      </div>
    );
  }
}