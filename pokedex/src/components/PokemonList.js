import React from 'react';
import { Grid2 } from '@mui/material';
import PokemonCard from './PokemonCard';

function PokemonList({ pokemonData }) {
  return (
    <Grid2 container spacing={3}>
      {pokemonData.map((pokemon, index) => (
        <Grid2 item xs={14} sm={1} md={1} key={index}>
          <PokemonCard name={pokemon.name} url={pokemon.url} />
        </Grid2>
      ))}
    </Grid2>
  );
}

export default PokemonList;
