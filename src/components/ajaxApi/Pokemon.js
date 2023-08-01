import React from 'react';
import { Figure } from './PokemonStyle';

export default function Pokemon(props) {
  return (
    <Figure>
      <img src={props.avatar} alt={props.name}></img>
      <figcaption>{props.name}</figcaption>
    </Figure>
  );
}
