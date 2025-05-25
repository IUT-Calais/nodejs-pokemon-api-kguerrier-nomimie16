import { Router } from 'express';
import { getPokemonCards, getPokemon, createPokemon, deletePokemon, updatePokemon } from './pokemon.controller';


export const pokemonRouter = Router();


pokemonRouter.get('/', getPokemonCards);
pokemonRouter.get('/:pokemonCardId', getPokemon);
pokemonRouter.post('/create', createPokemon);
pokemonRouter.delete('/delete/:pokemonCardId', deletePokemon);
pokemonRouter.patch('/update/:pokemonCardId', updatePokemon);
