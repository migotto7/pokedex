import React from "react";
import { Modal, Box, Typography } from "@mui/material";

function PokemonModal ({ open, handleClose, pokemonDetails }) {
    if(!pokemonDetails) return "Não possui pokemonDetails";

    return(
        <Modal open={open} onClose={handleClose}>
            <Box 
                sx={{
                    position: 'absolute',
                    top: "50%",
                    left: "50%",
                    transform: 'translate(-50%, -50%)',
                    width: 300,
                    bgcolor: '#FFF',
                    boxShadow: 24,
                    p: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}
            >
                <Typography variant="h4" gutterBottom>
                    {pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}
                </Typography>
                <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
                <Typography variant="body1">Height: {pokemonDetails.height}</Typography>
                <Typography variant="body1">Weight: {pokemonDetails.weight}</Typography>
            </Box>
        </Modal>
    )
}

export default PokemonModal;