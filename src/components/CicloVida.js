import React, { Component } from 'react';

class Reloj extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return <h3>{this.props.hora}</h3>;
  }

  componentWillUnmount() {
    console.log(3, 'El componente ha sido eliminado del DOM');
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, 'El componente  se inicializa, aún No esta en el DOM');

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }
  componentDidMount() {
    /*
    Es recomendable que todas la peticiones a las base de datos, 
    servidores o a las api sean dentro del metodo componentDidMount 
  */
    console.log(1, 'El componente ya se encuentra en el DOM');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, ' El estado o las props del componente han camiado');
    console.log(prevProps);
    console.log(prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };
  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log(4, 'El componente se dibuja');
    return (
      <>
        <h2>Ciclo de vida de los componentes de clase</h2>
        {/*<h3>{this.state.hora}</h3>*/}
        {this.state.visible && <Reloj hora={this.state.hora}></Reloj>}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </>
    );
  }
}
