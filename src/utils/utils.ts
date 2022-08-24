import jwt from 'jsonwebtoken';
import { AppDataSource } from '../db';
import { Post, User } from '../models';

const userRepo = AppDataSource.getRepository(User);
const postRepo = AppDataSource.getRepository(Post);

const generateJWT = (id: number, email: string, role: string) =>
	jwt.sign({ id, email, role }, process.env.SECRET_KEY, { expiresIn: '24h' });

export { generateJWT, userRepo, postRepo };
