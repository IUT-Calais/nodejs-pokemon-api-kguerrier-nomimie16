import express from 'express';
import { PrismaClient } from '@prisma/client';
import{ Request, Response } from 'express';
import bcrypt from 'bcrypt';


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


