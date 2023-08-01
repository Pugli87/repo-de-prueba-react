import React, { Component } from 'react';

export class EventsES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log('suma');
    console.log(this);

    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    console.log('resta');
    console.log(this);

    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2> Eventos en Componentes de Clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// Property initializer
export class EventsES7 extends Component {
  state = {
    contador: 0,
  };

  // Arrow Functions
  sumar = e => {
    console.log('suma');
    console.log(this);

    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = e => {
    console.log('resta');
    console.log(this);

    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2> Eventos en Componentes de Clase ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

/*
function Boton(props) {
  return <button onClick={props.miOnClick}>Botton hecho componente</button>;
}*/

// boton creado con una arrow function
/*
const Boton = props => (
  <button onClick={props.miOnClick}>Botton hecho componente</button>
);*/

// desestructurando el objeto props y pasamos solo el componente miOnClick
const Boton = ({ miOnClick }) => (
  <button onClick={miOnClick}>Botton hecho componente</button>
);

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.target);
    console.log('Evento nativo', e.nativeEvent);
    console.log('Evento nativo', e.nativeEvent.target);
    console.log(mensaje);
  };
  render() {
    return (
      <div>
        <h2>Mas sobre eventos</h2>
        <button
          onClick={e =>
            this.handleClick(e, 'Pasando un parametro desde un evento')
          }
        >
          Saludar
        </button>
        <Boton
          miOnClick={e =>
            this.handleClick(
              e,
              'Pasando un parametro desde un evento personalizado'
            )
          }
        />
      </div>
    );
  }
}

export class Welcome extends Component {
  /*  
  //cambio de estado con constructor
  constructor() {
    super();

    this.state = {
      title: 'Hola Mundo',
    };

    // tenemos que enlazar el método al contexto actual
    this.updateText = this.updateText.bind(this);
  }

  updateText() {
    this.setState({
      title: 'Hello World',
    });
  }
  //Cambio de estado con ES7 Property initializer 
  */
  state = {
    title: 'Hola Mundo',
  };

  updateText = () => {
    this.setState({
      title: 'Hello World',
    });
  };

  render() {
    return <h1 onClick={this.updateText}>{this.state.title}</h1>;
  }
}
