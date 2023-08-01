import React, { Component } from 'react';
import data from '../data/data.json';

function ListItem(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank" rel="noreferrer">
        {props.el.name}
      </a>
    </li>
  );
}

export default class RederElements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
    };
  }
  render() {
    //console.log(data);
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.seasons.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ol>
        <h3>Frameworks Frontend Javascript</h3>
        <ul>
          {data.frameworks.map(el => (
            <ListItem key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
