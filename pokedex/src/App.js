import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import PokemonList from './components/PokemonList';
import axios from 'axios';

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    // Função para buscar dados dos Pokémon
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        setPokemonData(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar dados dos Pokémon:", error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Pokédex
      </Typography>
      <PokemonList pokemonData={pokemonData} />
    </Container>
  );
}

export default App;
