import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../errors/ApiError';
import UserService from '../services/UserService';

class UserController {
	async registration(req: Request, res: Response, next: NextFunction) {
		try {
			const token = await UserService.registration(req.body, req.body.email);
			res.json({ token });
		} catch (e) {
			if (e instanceof Error) return next(ApiError.badRequest(e.message));
			else console.log('непредвиденная ошибка', e);
		}
	}

	async login(req: Request, res: Response, next: NextFunction) {
		try {
			const token = await UserService.login(req.body.email, req.body.password);
			res.json({ token });
		} catch (e) {
			if (e instanceof Error) return next(ApiError.badRequest(e.message));
			else console.log('непредвиденная ошибка', e);
		}
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
