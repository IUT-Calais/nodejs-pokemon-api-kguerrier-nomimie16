import request from 'supertest';
import app from '../src/app';
import { prismaMock } from './jest.setup';

describe('PokemonCard API', () => {
  describe('GET /pokemon-cards', () => {
    it('affiche tout les pokemon', async () => {
      const mockPokemonCards = []; 
      
      prismaMock.pokemonCard.findMany.mockResolvedValue(mockPokemonCards);

      const response = await request(app).get('/pokemon-cards');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockPokemonCards);
    });
  });

describe('GET /pokemon-cards/:pokemonCardId', () => {
  it('affiche un poke par son son id', async () => {
    const mockPokemonCard = {
      id: 1,
      name: 'Pikachu',
      pokedexId: 25,
      typeId: 1,
      lifePoints: 100,
      size: 0.4,
      weight: 6,
      imageUrl: null,
    };

    prismaMock.pokemonCard.findUnique.mockResolvedValue(mockPokemonCard);

    const response = await request(app).get('/pokemon-cards/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockPokemonCard);
  });

  it('renvoit 404 si le PokemonCard est pas trouvé', async () => {
    prismaMock.pokemonCard.findUnique.mockResolvedValue(null);

    const response = await request(app).get('/pokemon-cards/999');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'PokemonCard not found' });
  });
});

  describe('POST /pokemon-cards', () => {
    it('doit crer un nouveau pokemon', async () => {
      const newCardData = { name: 'Bulbasaur' };
      const createdPokemonCard = {
        id: 1,                  
        name: "Pikachu",
        pokedexId: 25,
        typeId: 1,
        lifePoints: 100,
        size: null,             
        weight: null,           
        imageUrl: null          
      };


      prismaMock.pokemonCard.create.mockResolvedValue(createdPokemonCard);

      const response = await request(app)
        .post('/pokemon-cards')
        .send(newCardData);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(createdPokemonCard);
    });
  });

  describe('PATCH /pokemon-cards/:pokemonCardId', () => {
    it('doit modifier un pokemon existant', async () => {
      const updateData = { name: 'Ivysaur' };
      const updatedPokemonCard = {
        id: 1,                  
        name: "Pikachu",
        pokedexId: 25,
        typeId: 1,
        lifePoints: 100,
        size: null,             
        weight: null,           
        imageUrl: null    };

      prismaMock.pokemonCard.update.mockResolvedValue(updatedPokemonCard);

      const response = await request(app)
        .patch('/pokemon-cards/2')
        .send(updateData);

      expect(response.status).toBe(200);
      expect(response.body).toEqual(updatedPokemonCard);
    });
  });

  describe('DELETE /pokemon-cards/:pokemonCardId', () => {
    it('doit supprimer un poke existant', async () => {
      const mockPokemonCard = {
      id: 1,
      name: 'Pikachu',
      pokedexId: 25,
      typeId: 1,
      lifePoints: 100,
      size: 0.4,
      weight: 6,
      imageUrl: null,
    };
    prismaMock.pokemonCard.findUnique.mockResolvedValue(mockPokemonCard);

      const response = await request(app).delete('/pokemon-cards/2');

      expect(response.status).toBe(204);
      expect(response.body).toEqual({});
    });
  });
});
