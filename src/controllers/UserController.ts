import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../errors/ApiError';
import { User } from '../models';
import { AppDataSource } from '../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userRepo = AppDataSource.getRepository(User);

const generateJWT = (id: number, email: string, role: string) =>
	jwt.sign({ id, email, role }, process.env.SECRET_KEY, { expiresIn: '24h' });

class UserController {
	async registration(req: Request, res: Response, next: NextFunction) {
		const { fullName, email, password, role } = req.body;

		if (!email || !password) {
			return next(ApiError.badRequest('некорректный email или пароль'));
		}

		const candidate = await userRepo.findOne({ where: { email } });

		if (candidate) {
			return next(ApiError.badRequest('пользователь с таким email существует'));
		}

		const hashPassword = await bcrypt.hash(password, 5);
		const user = await User.create({ fullName, email, password: hashPassword, role });
		await userRepo.save(user);
		const token = generateJWT(user.id, user.email, user.role);

		res.json({ token });
	}

	async login(req: Request, res: Response) {
		res.send('логин');
	}

	async checkAuth(req: Request, res: Response, next: NextFunction) {
		const { id } = req.query;
		if (!id) {
			return next(ApiError.badRequest('не задан id'));
		}
		res.json(id);
	}
}

export default new UserController();
