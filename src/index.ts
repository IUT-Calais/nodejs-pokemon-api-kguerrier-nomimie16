import express from 'express';
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { pokemonRouter } from './pokemon/pokemon.router';
import { usersRouter} from './users/users.router';

import bcrypt from 'bcrypt';


export const app = express();
const port = process.env.PORT || 3000;
import DBClient from './client'
const prisma = DBClient.getInstance().prisma

app.use(express.json());

export const server = app.listen(port);
export function stopServer() {
  server.close();
} 

app.use('/pokemons-cards', pokemonRouter);
app.use('/users', usersRouter);


// app.post('/users', async (req: Request, res: Response) => {
//   const { email, password } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = await prisma.user.create({
//       data: {
//         email,
//         password: hashedPassword
//       }
//     });
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(400).send('L\'email est déjà utilisé');
//   }
// });


// app.get('/pokemons-cards', async(_req: Request , res: Response) => {
//   const pokemonCards = await prisma.pokemonCard.findMany({include: {type: true}});
//   res.status(200).send(pokemonCards);
//   }
// );

// app.get('/pokemons-cards/:pokemonCardId/', async (_req: Request , res: Response) => {
//   const { pokemonCardId } = _req.params;
//   const pokemonCard = await prisma.pokemonCard.findUnique({
//     where: { id: parseInt(pokemonCardId) },
//   });
//   if (pokemonCard) {
//     res.status(200).json(pokemonCard);
//   } else {
//     res.status(404).send('Pokemon pas trouvé');
//   }
// });

// app.post('/pokemons-cards/create', async (_req: Request , res: Response) => {
//   const {name, pokedexId, typeId, lifePoints, weight, size } = _req.body;
//   try {
//     const newPokemonCard = await prisma.pokemonCard.create({
//       data: {
//         name,
//         pokedexId,
//         typeId,
//         lifePoints,
//         weight,
//         size        
//       }
//     });
//     res.status(201).json(newPokemonCard);
//   } catch (error) {
//     res.status(500).send('Erreur lors de la création du pokémon');
//   }
// });

// app.post('/pokemons-cards', (_req: Request , res: Response) => {
//   res.status(200).send('Enregistrer le pokémon');
//   }
// );

// app.patch('/pokemons-cards/:pokemonCardId', (_req: Request , res: Response) => {
//   res.status(200).send('Modifier le pokémon donc le pokemonCardId');
//   }
// );

// app.delete('/pokemons-cards/:pokemonCardId', (_req: Request , res: Response) => {
//   res.status(200).send('Supprimer le pokémon donc le pokemonCardId');
//   }
// );