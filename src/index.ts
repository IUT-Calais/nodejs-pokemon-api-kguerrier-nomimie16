import express from 'express';
import { Request, Response } from 'express';

export const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

export const server = app.listen(port);

export function stopServer() {
  server.close();
}

app.get('/pokemons-cards', (_req: Request , res: Response) => {
  res.status(200).send('Liste des Pokemon');
  }
);

app.get('/pokemons-cards/:pokemonCardId/', (_req: Request , res: Response) => {
  res.status(200).send('Détail du Pokemon');
  }
);

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