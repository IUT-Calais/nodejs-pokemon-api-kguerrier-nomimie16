import { Router } from 'express';
import {createUser } from './users.controller';


export const usersRouter = Router();

// pokemonRouter.get('/', getPokemonCards);
// pokemonRouter.get('/:pokemonCardId', getPokemon);
usersRouter.post('/', createUser);
