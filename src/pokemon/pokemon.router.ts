import { Router } from 'express';
import { getPokemonCards, getPokemon, createPokemon } from './pokemon.controller';


export const pokemonRouter = Router();
// Route pour obtenir la liste des utilisateurs
pokemonRouter.get('/', getPokemonCards);
pokemonRouter.get('/', getPokemon);
pokemonRouter.post('/', createPokemon);