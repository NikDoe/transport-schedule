import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../errors/ApiError';
import UserService from '../services/UserService';
import { generateJWT } from '../utils/utils';

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

	async checkAuth(req: Request, res: Response) {
		const token = generateJWT(req.user.id, req.user.email, req.user.role);
		res.json({ token });
	}
}

export default new UserController();
