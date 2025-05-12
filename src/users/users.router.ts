import { Router } from 'express';
import {createUser } from './users.controller';
import {loginUser} from './users.controller';       



export const usersRouter = Router();

// usersRouter.get('/getUsers', getAllUsers);
// pokemonRouter.get('/:pokemonCardId', getPokemon);
usersRouter.post('/', createUser);
usersRouter.post('/login', loginUser);