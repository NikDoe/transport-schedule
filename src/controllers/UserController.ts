import { Request, Response } from 'express';

class UserController {
	async registration(req: Request, res: Response) {
		res.send('регистрация');
	}

	async login(req: Request, res: Response) {
		res.send('логин');
	}

	async checkAuth(req: Request, res: Response) {
		res.send('авторизован ли пользователь');
	}
}

export default new UserController();
