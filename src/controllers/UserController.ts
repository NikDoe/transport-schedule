import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../errors/ApiError';

class UserController {
	async registration(req: Request, res: Response) {
		res.send('регистрация');
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
