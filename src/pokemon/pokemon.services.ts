import http from 'http';

import { Router } from 'express';
import { getPokemonCards, getPokemon, createPokemon, deletePokemon, updatePokemon } from './pokemon.controller';

// Création du serveur HTTP
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Requête GET réussie avec code 200\n');
    }
    if (req.method === 'POST') {
        res.writeHead(201, { 'Content-Type': 'text/plain' });
        res.end('Création réussie avec code 201\n');
    } 

    else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Méthode non autorisée\n');
    }
});

server.listen(3000, () => {
    console.log("Serveur en cours d'écoute sur le port 3000...");
});