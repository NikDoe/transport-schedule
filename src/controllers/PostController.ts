import { Request, Response } from 'express';

class PostController {
	async createPost(req: Request, res: Response) {
		res.send('пост создан');
	}

	async getAllPosts(req: Request, res: Response) {
		res.send('все посты получены');
	}

	async getOnePost(req: Request, res: Response) {
		res.send('получен конкретный пост');
	}
}

export default new PostController();
