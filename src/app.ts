// src/app.ts
import express from 'express';
import DBClient from './client';
import { pokemonRouter } from './pokemon/pokemon.router';
import { usersRouter} from './users/users.router';


const prisma = DBClient.getInstance().prisma;

const app = express();
app.use('/pokemons-cards', pokemonRouter);
app.use('/users', usersRouter);


export default app;
