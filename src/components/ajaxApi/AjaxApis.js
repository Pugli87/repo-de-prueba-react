import React, { Component } from 'react';
import Pokemon from './Pokemon';

export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(url)
      .then(res => res.json())
      .then(json => {
        // Almacenar todas las promesas de las peticiones fetch en un array
        const fetchPromises = json.results.map(el =>
          fetch(el.url).then(res => res.json())
        );

        // Esperar a que todas las promesas se resuelvan usando Promise.all
        Promise.all(fetchPromises)
          .then(pokemonsData => {
            // Ahora todos los datos de los Pokémon están disponibles, así que creamos el array final de pokemons y actualizamos el estado
            const pokemons = pokemonsData.map(pokemonData => ({
              id: pokemonData.id,
              name: pokemonData.name,
              avatar: pokemonData.sprites.front_default,
            }));

            this.setState({ pokemons });
          })
          .catch(error => {
            console.error('Error al obtener los datos de los Pokémon:', error);
          });
      })
      .catch(error => {
        console.error('Error al obtener la lista de Pokémon:', error);
      });
  }

  render() {
    const containerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      maxWidth: '800px', // Optional, adjust the width as needed
      margin: '0 auto', // Optional, center the container horizontally
    };
    return (
      <>
        <h2>Peticiones asíncronas en componentes de clase</h2>
        <div style={containerStyle}>
          {this.state.pokemons.length === 0 ? (
            <h3>Cargando...</h3>
          ) : (
            this.state.pokemons.map(el => (
              <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
            ))
          )}
        </div>
      </>
    );
  }
}
