-- CreateTable
CREATE TABLE "PokemonCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "pokedexId" INTEGER NOT NULL,
    "lifePoints" INTEGER NOT NULL,
    "size" REAL,
    "weight" REAL,
    "imageUrl" TEXT
);

-- CreateTable
CREATE TABLE "_PokemonCardToType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PokemonCardToType_A_fkey" FOREIGN KEY ("A") REFERENCES "PokemonCard" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PokemonCardToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PokemonCard_name_key" ON "PokemonCard"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PokemonCard_pokedexId_key" ON "PokemonCard"("pokedexId");

-- CreateIndex
CREATE UNIQUE INDEX "_PokemonCardToType_AB_unique" ON "_PokemonCardToType"("A", "B");

-- CreateIndex
CREATE INDEX "_PokemonCardToType_B_index" ON "_PokemonCardToType"("B");
