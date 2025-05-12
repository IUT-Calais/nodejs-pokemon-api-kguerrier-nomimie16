import express from 'express';
import { PrismaClient } from '@prisma/client';
import{ Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const prisma = new PrismaClient();


export const createUser = async (req: Request , res: Response) => {
    const { email, password } = req.body;
      try {
      
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
          data: {
            email: email,
            password: hashedPassword
          }
        });
        res.status(201).json(newUser);
      } catch (error) {
        res.status(400).send('L\'email : '+ email +' est déjà utilisé');
      }
}   


export const loginUser = async (req: Request , res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: { email: email },
        });

        if (!user) { 
          throw new Error('user erreur');
          ;}

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          throw new Error('password erreur');
        }

        if (!process.env.JWT_SECRET ) {
          throw new Error('JWT_SECRET est manquant dans .env');
        }

        const token = jwt.sign({ 
          id: user.id,
          email: user.email 
        }, process.env.JWT_SECRET , { expiresIn: "1d" });
        res.status(200).json({ token, user });


    } catch (error) {
        res.status(500).send('Erreur serveur');
    }
}


