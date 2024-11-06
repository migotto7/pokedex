import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardMedia, CircularProgress } from '@mui/material';
import PokemonModal from './PokemonModal';
import axios from 'axios';

function PokemonCard({ name, url }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(url);
        setPokemonDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar detalhes do Pokémon:", error);
      }
    };

    fetchPokemonDetails();
  }, [url]);

  console.log("pokemondetails", pokemonDetails)

  return (
    <>
      <Card onClick={() => setOpen(true)}
        style={{ height: 200, width: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <CardMedia
              component="img"
              image={pokemonDetails.sprites.front_default}
              alt={name}
              style={{ height: 140, width: 140}}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Typography>
            </CardContent>
          </>
        )}
      </Card>
      <PokemonModal open={open} handleClose={() => setOpen(false)} pokemonDetails={pokemonDetails} />
    </>
  );
}

export default PokemonCard;
