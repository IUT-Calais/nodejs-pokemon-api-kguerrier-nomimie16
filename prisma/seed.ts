import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
  await prisma.type.deleteMany();
  await prisma.pokemonCard.deleteMany();

  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='pokemonCard'`;

  await prisma.type.createMany({
    data: [
      { name: 'Normal' },
      { name: 'Fire' },
      { name: 'Water' },
      { name: 'Grass' },
      { name: 'Electric' },
      { name: 'Ice' },
      { name: 'Fighting' },
      { name: 'Poison' },
      { name: 'Ground' },
      { name: 'Flying' },
      { name: 'Psychic' },
      { name: 'Bug' },
      { name: 'Rock' },
      { name: 'Ghost' },
      { name: 'Dragon' },
      { name: 'Dark' },
      { name: 'Steel' },
      { name: 'Fairy' },
    ],
  });

  await prisma.pokemonCard.create({
    data: {
      name:"Bulbizarre",
      pokedexId:1,
      type: { connect: { id: 4 } }, 
      lifePoints:45,
      weight:6.9,
      size:0.7,
      imageUrl : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
    },
    });

    // await prisma.pokemonCard.createMany({
    //   data: [
    //     {
    //       name:"Herbizarre",
    //       pokedexId:2,
    //       type: { connect: { id: 4 } }, 
    //       lifePoints:60,
    //       weight:13.0,
    //       size:1.0,
          
    //     },
    //     {
    //       name:"Florizarre",
    //       pokedexId:3,
    //       typeId:4, 
    //       lifePoints:80,
    //       weight:100.0,
    //       size:2.0,
         
    //     },
        
    //   ],})

  console.log('Seed completed!');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
