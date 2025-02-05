import { Router } from 'express';
import { getPokemonCards, getPokemon, createPokemon, deletePokemon } from './pokemon.controller';


export const pokemonRouter = Router();

// Route pour obtenir la liste des pokemons
pokemonRouter.get('/', getPokemonCards);
pokemonRouter.get('/:pokemonCardId', getPokemon);
pokemonRouter.post('/create', createPokemon);
pokemonRouter.post('/delete/:pokemonCardId', deletePokemon);
