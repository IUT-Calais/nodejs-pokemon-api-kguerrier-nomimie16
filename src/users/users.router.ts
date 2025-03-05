import { Router } from 'express';
import {createUser } from './users.controller';


export const usersRouter = Router();

// usersRouter.get('/getUsers', getAllUsers);
// pokemonRouter.get('/:pokemonCardId', getPokemon);
usersRouter.post('/', createUser);
