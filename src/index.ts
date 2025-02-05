import express from 'express';
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

export const app = express();
const port = process.env.PORT || 3000;
import DBClient from './client'
const prisma = DBClient.getInstance().prisma


app.use(express.json());

export const server = app.listen(port);

export function stopServer() {
  server.close();
}

app.get('/pokemons-cards', async(_req: Request , res: Response) => {
  const pokemonCards = await prisma.pokemonCard.findMany({include: {type: true}});
  res.status(200).send(pokemonCards);
  }
);

app.get('/pokemons-cards/:pokemonCardId/', async (_req: Request , res: Response) => {
  const { pokemonCardId } = _req.params;
  const pokemonCard = await prisma.pokemonCard.findUnique({
    where: { id: parseInt(pokemonCardId) },
  });
  if (pokemonCard) {
    res.status(200).json(pokemonCard);
  } else {
    res.status(404).send('Pokemon pas trouvé');
  }
  }
);

app.post('/pokemons-cards/create', async (_req: Request , res: Response) => {
  const { name, pokedexId, type, lifePoints, weight, size } = _req.body;
  try {
    const newPokemonCard = await prisma.pokemonCard.create({
      data: {
        name,
        pokedexId,
        type: {
          connect: { id: typeId }
        },
        lifePoints,
        weight,
        size        
      }
    });
    res.status(201).json(newPokemonCard);
  } catch (error) {
    res.status(500).send('Erreur lors de la création du pokémon');
  }
});

app.post('/pokemons-cards', (_req: Request , res: Response) => {
  res.status(200).send('Enregistrer le pokémon');
  }
);

app.patch('/pokemons-cards/:pokemonCardId', (_req: Request , res: Response) => {
  res.status(200).send('Modifier le pokémon donc le pokemonCardId');
  }
);

app.delete('/pokemons-cards/:pokemonCardId', (_req: Request , res: Response) => {
  res.status(200).send('Supprimer le pokémon donc le pokemonCardId');
  }
);