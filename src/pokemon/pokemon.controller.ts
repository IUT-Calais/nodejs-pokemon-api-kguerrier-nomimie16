import express from 'express';
import { PrismaClient } from '@prisma/client';
import{ Request, Response } from 'express';

const prisma = new PrismaClient();

    
export const getPokemonCards = async(_req: Request , res: Response) => {
  const pokemonCards = await prisma.pokemonCard.findMany({include: {type: true}});
  res.status(200).send(pokemonCards);
  }


export const getPokemon = async (_req: Request , res: Response) => {
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

export const createPokemon = async (_req: Request , res: Response) => {
  const {name, pokedexId, typeId, lifePoints, weight, size } = _req.body;
  try {
    const newPokemonCard = await prisma.pokemonCard.create({
      data: {
        name,
        pokedexId,
        type : { connect: { id: typeId } },
        lifePoints,
        weight,
        size        
      }
    });
    res.status(201).json(newPokemonCard);
  } catch (error) {
    res.status(500).send('Erreur lors de la création du pokémon');
  }
}

    
export const updatePokemon = async  (_req: Request , res: Response) => {
    const { pokemonCardId } = _req.params;
    const {name, pokedexId, typeId, lifePoints, weight, size } = _req.body;
    const pokemonCard = await prisma.pokemonCard.update({
        where: { id: parseInt(pokemonCardId) },
        data: {
        name,
        pokedexId,
        type : { connect: { id: typeId } },
        lifePoints,
        weight,
        size
        },
    });
    res.status(200).send(pokemonCard);
}

export const deletePokemon = async (_req: Request , res: Response) => {
    const { pokemonCardId } = _req.params;
    const pokemonCard = await prisma.pokemonCard.delete({
      where: { id: parseInt(pokemonCardId) },
    });
    res.status(200).send(pokemonCard);
  }


