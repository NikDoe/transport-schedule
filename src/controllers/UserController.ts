import { Request, Response } from 'express';

class UserController {
	async registration(req: Request, res: Response) {
		res.send('контроллеры работают');
	}
}

export const userController = new UserController();
